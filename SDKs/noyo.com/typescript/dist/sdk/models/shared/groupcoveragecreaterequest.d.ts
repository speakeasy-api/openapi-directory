import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The line of coverage requested with the carrier application
 */
export declare enum GroupCoverageCreateRequestLineOfCoverageEnum {
    Accident = "accident",
    Add = "add",
    Cancer = "cancer",
    CriticalIllness = "critical_illness",
    Dental = "dental",
    HospitalIndemnity = "hospital_indemnity",
    Life = "life",
    Ltd = "ltd",
    Medical = "medical",
    Std = "std",
    Vision = "vision"
}
export declare class GroupCoverageCreateRequest extends SpeakeasyBase {
    /**
     * True if this line of coverage is currently active with the carrier
     */
    existingCoverage?: boolean;
    /**
     * The line of coverage requested with the carrier application
     */
    lineOfCoverage: GroupCoverageCreateRequestLineOfCoverageEnum;
    /**
     * General platform notes about the group coverage
     */
    notes?: string;
    /**
     * Requested effective date for start of coverage
     */
    requestedEffectiveDate: Date;
}
