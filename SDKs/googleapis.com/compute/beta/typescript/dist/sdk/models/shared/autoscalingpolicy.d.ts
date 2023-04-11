import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingPolicyCpuUtilization } from "./autoscalingpolicycpuutilization";
import { AutoscalingPolicyCustomMetricUtilization } from "./autoscalingpolicycustommetricutilization";
import { AutoscalingPolicyLoadBalancingUtilization } from "./autoscalingpolicyloadbalancingutilization";
import { AutoscalingPolicyScaleDownControl } from "./autoscalingpolicyscaledowncontrol";
import { AutoscalingPolicyScaleInControl } from "./autoscalingpolicyscaleincontrol";
import { AutoscalingPolicyScalingSchedule } from "./autoscalingpolicyscalingschedule";
/**
 * Defines operating mode for this policy.
 */
export declare enum AutoscalingPolicyModeEnum {
    Off = "OFF",
    On = "ON",
    OnlyScaleOut = "ONLY_SCALE_OUT",
    OnlyUp = "ONLY_UP"
}
/**
 * Cloud Autoscaler policy.
 */
export declare class AutoscalingPolicy extends SpeakeasyBase {
    /**
     * The number of seconds that the autoscaler waits before it starts collecting information from a new instance. This prevents the autoscaler from collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is 60 seconds. Virtual machine initialization times might vary because of numerous factors. We recommend that you test how long an instance may take to initialize. To do this, create an instance and time the startup process.
     */
    coolDownPeriodSec?: number;
    /**
     * CPU utilization policy.
     */
    cpuUtilization?: AutoscalingPolicyCpuUtilization;
    /**
     * Configuration parameters of autoscaling based on a custom metric.
     */
    customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[];
    /**
     * Configuration parameters of autoscaling based on load balancing.
     */
    loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization;
    /**
     * The maximum number of instances that the autoscaler can scale out to. This is required when creating or updating an autoscaler. The maximum number of replicas must not be lower than minimal number of replicas.
     */
    maxNumReplicas?: number;
    /**
     * The minimum number of replicas that the autoscaler can scale in to. This cannot be less than 0. If not provided, autoscaler chooses a default value depending on maximum number of instances allowed.
     */
    minNumReplicas?: number;
    /**
     * Defines operating mode for this policy.
     */
    mode?: AutoscalingPolicyModeEnum;
    /**
     * Configuration that allows for slower scale in so that even if Autoscaler recommends an abrupt scale in of a MIG, it will be throttled as specified by the parameters below.
     */
    scaleDownControl?: AutoscalingPolicyScaleDownControl;
    /**
     * Configuration that allows for slower scale in so that even if Autoscaler recommends an abrupt scale in of a MIG, it will be throttled as specified by the parameters below.
     */
    scaleInControl?: AutoscalingPolicyScaleInControl;
    /**
     * Scaling schedules defined for an autoscaler. Multiple schedules can be set on an autoscaler, and they can overlap. During overlapping periods the greatest min_required_replicas of all scaling schedules is applied. Up to 128 scaling schedules are allowed.
     */
    scalingSchedules?: Record<string, AutoscalingPolicyScalingSchedule>;
}
