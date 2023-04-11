import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Capacity commitment commitment plan.
 */
export declare enum CapacityCommitmentPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}
/**
 * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.
 */
export declare enum CapacityCommitmentRenewalPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    Flex = "FLEX",
    Trial = "TRIAL",
    Monthly = "MONTHLY",
    Annual = "ANNUAL"
}
/**
 * Output only. State of the commitment.
 */
export declare enum CapacityCommitmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED"
}
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
 */
export declare class CapacityCommitment extends SpeakeasyBase {
    /**
     * Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments.
     */
    commitmentEndTime?: string;
    /**
     * Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.
     */
    commitmentStartTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    failureStatus?: Status;
    /**
     * Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region.
     */
    multiRegionAuxiliary?: boolean;
    /**
     * Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123` The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters.
     */
    name?: string;
    /**
     * Capacity commitment commitment plan.
     */
    plan?: CapacityCommitmentPlanEnum;
    /**
     * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.
     */
    renewalPlan?: CapacityCommitmentRenewalPlanEnum;
    /**
     * Number of slots in this commitment.
     */
    slotCount?: string;
    /**
     * Output only. State of the commitment.
     */
    state?: CapacityCommitmentStateEnum;
}
/**
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
 */
export declare class CapacityCommitmentInput extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    failureStatus?: Status;
    /**
     * Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region.
     */
    multiRegionAuxiliary?: boolean;
    /**
     * Capacity commitment commitment plan.
     */
    plan?: CapacityCommitmentPlanEnum;
    /**
     * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.
     */
    renewalPlan?: CapacityCommitmentRenewalPlanEnum;
    /**
     * Number of slots in this commitment.
     */
    slotCount?: string;
}
