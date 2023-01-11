package openapisdk.models.shared;


public enum PatientWaitTimeServiceEnum {
    AUDIOLOGY("Audiology"),
    CARDIOLOGY("Cardiology"),
    CAREGIVER_SUPPORT("CaregiverSupport"),
    COVID19_VACCINE("Covid19Vaccine"),
    DENTAL_SERVICES("DentalServices"),
    DERMATOLOGY("Dermatology"),
    EMERGENCY_CARE("EmergencyCare"),
    GASTROENTEROLOGY("Gastroenterology"),
    GYNECOLOGY("Gynecology"),
    MENTAL_HEALTH_CARE("MentalHealthCare"),
    OPHTHALMOLOGY("Ophthalmology"),
    OPTOMETRY("Optometry"),
    ORTHOPEDICS("Orthopedics"),
    NUTRITION("Nutrition"),
    PODIATRY("Podiatry"),
    PRIMARY_CARE("PrimaryCare"),
    SPECIALTY_CARE("SpecialtyCare"),
    URGENT_CARE("UrgentCare"),
    UROLOGY("Urology"),
    WOMENS_HEALTH("WomensHealth");

    public final String value;

    private PatientWaitTimeServiceEnum(String value) {
        this.value = value;
    }
}
