import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatientWaitTimeServiceEnum {
    Audiology = "Audiology",
    Cardiology = "Cardiology",
    CaregiverSupport = "CaregiverSupport",
    Covid19Vaccine = "Covid19Vaccine",
    DentalServices = "DentalServices",
    Dermatology = "Dermatology",
    EmergencyCare = "EmergencyCare",
    Gastroenterology = "Gastroenterology",
    Gynecology = "Gynecology",
    MentalHealthCare = "MentalHealthCare",
    Ophthalmology = "Ophthalmology",
    Optometry = "Optometry",
    Orthopedics = "Orthopedics",
    Nutrition = "Nutrition",
    Podiatry = "Podiatry",
    PrimaryCare = "PrimaryCare",
    SpecialtyCare = "SpecialtyCare",
    UrgentCare = "UrgentCare",
    Urology = "Urology",
    WomensHealth = "WomensHealth"
}
/**
 * Expected wait times for new and established patients for a given health care service
 */
export declare class PatientWaitTime extends SpeakeasyBase {
    /**
     * Average number of days a patient who has already been to this location has to wait for a non-urgent appointment.
     */
    established?: number;
    /**
     * Average number of days a Veteran who hasn't been to this location has to wait for a non-urgent appointment.
     */
    new?: number;
    service: PatientWaitTimeServiceEnum;
}
