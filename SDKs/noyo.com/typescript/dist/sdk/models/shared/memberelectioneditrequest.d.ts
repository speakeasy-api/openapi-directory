import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the member election on the coverage plan
 */
export declare enum MemberElectionEditRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}
export declare class MemberElectionEditRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the coverage plan in Noyo
     */
    planId?: string;
    /**
     * Status of the member election on the coverage plan
     */
    status?: MemberElectionEditRequestStatusEnum;
    /**
     * Volume amount requested for the enrolling member
     */
    volume?: number;
}
