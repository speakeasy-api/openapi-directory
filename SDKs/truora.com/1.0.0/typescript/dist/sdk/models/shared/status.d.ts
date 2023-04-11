import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Background check dataset
 */
export declare enum StatusDataSetEnum {
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
 * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the search finished successfully, **error** means the search failed, **expired** means the search took too long to finish and therefore failed, **skipped** means the search failed because a wrong number or type of parameters was provided, **delayed** means the search is waiting for an additional requirement to be met and can last up to 3 days
 */
export declare enum StatusStatusEnum {
    NotStarted = "not_started",
    Completed = "completed",
    Expired = "expired",
    Error = "error",
    Delayed = "delayed",
    Skipped = "skipped"
}
/**
 * Represents the status of databases used to generate background checks
 */
export declare class Status extends SpeakeasyBase {
    /**
     * Background check dataset
     */
    dataSet?: StatusDataSetEnum;
    /**
     * Database ID. Can be used to verify the database status
     */
    databaseId?: string;
    /**
     * Background check database name. Do not use this field to identify the database as it may change during the check execution. Use database_id instead
     */
    databaseName?: string;
    /**
     * List of missing or invalid inputs
     */
    invalidInputs?: string[];
    /**
     * Result status of the background check. **Not_started** means the background check is still in queue, since there is a limit of background checks that can be processed simultaneously, **completed** means the search finished successfully, **error** means the search failed, **expired** means the search took too long to finish and therefore failed, **skipped** means the search failed because a wrong number or type of parameters was provided, **delayed** means the search is waiting for an additional requirement to be met and can last up to 3 days
     */
    status?: StatusStatusEnum;
}
