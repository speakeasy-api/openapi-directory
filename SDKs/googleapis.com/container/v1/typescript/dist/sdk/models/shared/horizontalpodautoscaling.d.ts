import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
 */
export declare class HorizontalPodAutoscaling extends SpeakeasyBase {
    /**
     * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster. When enabled, it ensures that metrics are collected into Stackdriver Monitoring.
     */
    disabled?: boolean;
}
