import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MemberElectionEditRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
export declare class MemberElectionEditRequest extends SpeakeasyBase {
    planId?: string;
    status?: MemberElectionEditRequestStatusEnum;
    volume?: number;
}
