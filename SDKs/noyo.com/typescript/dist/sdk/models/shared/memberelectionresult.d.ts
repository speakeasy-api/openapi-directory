import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MemberElectionResultMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}
export declare enum MemberElectionResultStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
export declare class MemberElectionResult extends SpeakeasyBase {
    created: number;
    id: string;
    memberId: string;
    memberType: MemberElectionResultMemberTypeEnum;
    modified: number;
    planId: string;
    status: MemberElectionResultStatusEnum;
    version: string;
    volume?: number;
}
