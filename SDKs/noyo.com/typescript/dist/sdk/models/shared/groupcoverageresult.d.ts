import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class GroupCoverageResult extends SpeakeasyBase {
    applicationId: string;
    created: number;
    existingCoverage?: boolean;
    id: string;
    lineOfCoverage: GroupCoverageResultLineOfCoverageEnum;
    modified: number;
    notes?: string;
    requestedEffectiveDate: Date;
    version: string;
}
