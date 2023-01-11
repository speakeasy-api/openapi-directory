import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupApplicationResultApplicationTypeEnum {
    New = "new",
    Renewal = "renewal",
    Upsell = "upsell"
}
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
export declare class GroupApplicationResult extends SpeakeasyBase {
    applicationType: GroupApplicationResultApplicationTypeEnum;
    carrierGroupId: string;
    carrierId: string;
    created: number;
    groupId: string;
    id: string;
    modified: number;
    notes: string;
    status: GroupApplicationResultStatusEnum;
    statusNotes: string;
    version: string;
}
