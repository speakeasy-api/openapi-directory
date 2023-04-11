import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The line of coverage requested with the carrier application
 */
export declare enum GroupCoverageResultLineOfCoverageEnum {
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
/**
 * Successful Response - Returns the new Group Coverage
 */
export declare class GroupCoverageResult extends SpeakeasyBase {
    /**
     * Unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * True if this line of coverage is currently active with the carrier
     */
    existingCoverage?: boolean;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * The line of coverage requested with the carrier application
     */
    lineOfCoverage: GroupCoverageResultLineOfCoverageEnum;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * General platform notes about the group coverage
     */
    notes?: string;
    /**
     * Requested effective date for start of coverage
     */
    requestedEffectiveDate: Date;
    /**
     * Current version of the record
     */
    version: string;
}
