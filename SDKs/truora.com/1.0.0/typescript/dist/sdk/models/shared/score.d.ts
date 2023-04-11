import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreDetail } from "./scoredetail";
/**
 * Dataset summed up to create the score
 */
export declare enum ScoreDataSetEnum {
    AffiliationsAndInsurances = "affiliations_and_insurances",
    AlertInMedia = "alert_in_media",
    Behavior = "behavior",
    BusinessBackground = "business_background",
    CriminalRecord = "criminal_record",
    DrivingLicenses = "driving_licenses",
    InternationalBackground = "international_background",
    LegalBackground = "legal_background",
    PersonalIdentity = "personal_identity",
    ProfessionalBackground = "professional_background",
    TrafficFines = "traffic_fines",
    VehicleInformation = "vehicle_information",
    VehiclePermits = "vehicle_permits",
    TaxesAndFinances = "taxes_and_finances"
}
/**
 * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
 */
export declare enum ScoreResultEnum {
    Pending = "pending",
    Found = "found",
    NotFound = "not_found",
    Error = "error",
    Delayed = "delayed",
    Ignored = "ignored"
}
/**
 * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none due to a problem with one of the searches
 */
export declare enum ScoreSeverityEnum {
    Unknown = "unknown",
    None = "none",
    VeryLow = "very_low",
    Low = "low",
    Medium = "medium",
    High = "high",
    VeryHigh = "very_high"
}
/**
 * Represents dataset scores. A score is a number between 0 and 1 that indicates how trustworthy the person, vehicle, or company is accordig to the result of the background check. Severity represents the risk associated with each dataset according to the background check. Keep in mind that you should use either the score or the severity but not both
 */
export declare class Score extends SpeakeasyBase {
    /**
     * Represents score detail of a background check
     */
    byId: ScoreDetail;
    /**
     * Represents score detail of a background check
     */
    byName: ScoreDetail;
    /**
     * Dataset summed up to create the score
     */
    dataSet: ScoreDataSetEnum;
    /**
     * Overall result of the data collected. If at least one collected data status is found, the result will be found, otherwise, it will be the most frecuent status
     */
    result?: ScoreResultEnum;
    /**
     * Dataset score. Number between 0 and 1 where 1 is the best score.
     */
    score: number;
    /**
     * Risk asociated with each category for the search according to the information found. None is returned when the person, vehicle or company is in the clear. Unknown is returned when the score is none due to a problem with one of the searches
     */
    severity: ScoreSeverityEnum;
}
