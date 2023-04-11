import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficPercentStrategy } from "./trafficpercentstrategy";
/**
 * The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.
 */
export declare enum RolloutStatusEnum {
    RolloutStatusUnspecified = "ROLLOUT_STATUS_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Success = "SUCCESS",
    Cancelled = "CANCELLED",
    Failed = "FAILED",
    Pending = "PENDING",
    FailedRolledBack = "FAILED_ROLLED_BACK"
}
/**
 * A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
 */
export declare class Rollout extends SpeakeasyBase {
    /**
     * Creation time of the rollout. Readonly.
     */
    createTime?: string;
    /**
     * The user who created the Rollout. Readonly.
     */
    createdBy?: string;
    /**
     * Strategy used to delete a service. This strategy is a placeholder only used by the system generated rollout to delete a service.
     */
    deleteServiceStrategy?: Record<string, any>;
    /**
     * Optional. Unique identifier of this Rollout. Must be no longer than 63 characters and only lower case letters, digits, '.', '_' and '-' are allowed. If not specified by client, the server will generate one. The generated id will have the form of , where "date" is the create date in ISO 8601 format. "revision number" is a monotonically increasing positive number that is reset every day for each service. An example of the generated rollout_id is '2016-02-16r1'
     */
    rolloutId?: string;
    /**
     * The name of the service associated with this Rollout.
     */
    serviceName?: string;
    /**
     * The status of this rollout. Readonly. In case of a failed rollout, the system will automatically rollback to the current Rollout version. Readonly.
     */
    status?: RolloutStatusEnum;
    /**
     * Strategy that specifies how clients of Google Service Controller want to send traffic to use different config versions. This is generally used by API proxy to split traffic based on your configured percentage for each config version. One example of how to gradually rollout a new service configuration using this strategy: Day 1 Rollout { id: "example.googleapis.com/rollout_20160206" traffic_percent_strategy { percentages: { "example.googleapis.com/20160201": 70.00 "example.googleapis.com/20160206": 30.00 } } } Day 2 Rollout { id: "example.googleapis.com/rollout_20160207" traffic_percent_strategy: { percentages: { "example.googleapis.com/20160206": 100.00 } } }
     */
    trafficPercentStrategy?: TrafficPercentStrategy;
}
