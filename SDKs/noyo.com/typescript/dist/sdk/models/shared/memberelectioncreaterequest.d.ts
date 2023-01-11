import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MemberElectionCreateRequestMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}
export declare enum MemberElectionCreateRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
export declare class MemberElectionCreateRequest extends SpeakeasyBase {
    memberId: string;
    memberType: MemberElectionCreateRequestMemberTypeEnum;
    status: MemberElectionCreateRequestStatusEnum;
    volume?: number;
}
