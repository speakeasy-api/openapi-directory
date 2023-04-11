import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the dynamic group.
 */
export declare enum DynamicGroupStatusStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    UpToDate = "UP_TO_DATE",
    UpdatingMemberships = "UPDATING_MEMBERSHIPS",
    InvalidQuery = "INVALID_QUERY"
}
/**
 * The current status of a dynamic group along with timestamp.
 */
export declare class DynamicGroupStatus extends SpeakeasyBase {
    /**
     * Status of the dynamic group.
     */
    status?: DynamicGroupStatusStatusEnum;
    /**
     * The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created.
     */
    statusTime?: string;
}
