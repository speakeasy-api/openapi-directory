import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of member electing or waiving coverage
 */
export declare enum MemberElectionCreateRequestMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}
/**
 * Status of the member election on the coverage plan
 */
export declare enum MemberElectionCreateRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
export declare class MemberElectionCreateRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the member in Noyo
     */
    memberId: string;
    /**
     * Type of member electing or waiving coverage
     */
    memberType: MemberElectionCreateRequestMemberTypeEnum;
    /**
     * Status of the member election on the coverage plan
     */
    status: MemberElectionCreateRequestStatusEnum;
    /**
     * Volume amount requested for the enrolling member
     */
    volume?: number;
}
