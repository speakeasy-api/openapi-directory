import { SpeakeasyBase } from "../../../internal/utils";
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
    existingCoverage?: boolean;
    lineOfCoverage: GroupCoverageCreateRequestLineOfCoverageEnum;
    notes?: string;
    requestedEffectiveDate: Date;
}
