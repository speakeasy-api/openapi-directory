import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of application for the group with this carrier
 */
export declare enum GroupApplicationResultApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}
/**
 * Status of the application for the group
 */
export declare enum GroupApplicationResultStatusEnum {
    ActionRequired = "action_required",
    Canceled = "canceled",
    InProgress = "in_progress",
    InstalledAtCarrier = "installed_at_carrier",
    NoyoReview = "noyo_review",
    ReadyForRequests = "ready_for_requests",
    UnableToInstall = "unable_to_install",
    WaitingOnCarrier = "waiting_on_carrier"
}
/**
 * Successful Response - Returns a single Group Application
 */
export declare class GroupApplicationResult extends SpeakeasyBase {
    /**
     * Type of application for the group with this carrier
     */
    applicationType: GroupApplicationResultApplicationTypeEnum;
    /**
     * An id given by the carrier to identify the group
     */
    carrierGroupId: string;
    /**
     * Unique identifier of the associated carrier in Noyo
     */
    carrierId: string;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Unique identifier of the associated group in Noyo
     */
    groupId: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * General platform notes about the group application
     */
    notes: string;
    /**
     * Status of the application for the group
     */
    status: GroupApplicationResultStatusEnum;
    /**
     * Additional notes about the application status with the carrier
     */
    statusNotes: string;
    /**
     * Current version of the record
     */
    version: string;
}
