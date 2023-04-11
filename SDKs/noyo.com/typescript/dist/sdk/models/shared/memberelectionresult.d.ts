import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of member electing or waiving coverage
 */
export declare enum MemberElectionResultMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}
/**
 * Status of the member election on the coverage plan
 */
export declare enum MemberElectionResultStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
/**
 * Successful Response - Returns the new Member Election
 */
export declare class MemberElectionResult extends SpeakeasyBase {
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * Unique identifier of the member in Noyo
     */
    memberId: string;
    /**
     * Type of member electing or waiving coverage
     */
    memberType: MemberElectionResultMemberTypeEnum;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Unique identifier of the coverage plan in Noyo
     */
    planId: string;
    /**
     * Status of the member election on the coverage plan
     */
    status: MemberElectionResultStatusEnum;
    /**
     * Current version of the record
     */
    version: string;
    /**
     * Volume amount requested for the enrolling member
     */
    volume?: number;
}
