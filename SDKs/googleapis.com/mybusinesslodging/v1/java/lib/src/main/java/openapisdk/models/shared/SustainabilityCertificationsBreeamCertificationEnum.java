package openapisdk.models.shared;


public enum SustainabilityCertificationsBreeamCertificationEnum {
    BREEAM_CERTIFICATION_UNSPECIFIED("BREEAM_CERTIFICATION_UNSPECIFIED"),
    NO_BREEAM_CERTIFICATION("NO_BREEAM_CERTIFICATION"),
    BREEAM_PASS("BREEAM_PASS"),
    BREEAM_GOOD("BREEAM_GOOD"),
    BREEAM_VERY_GOOD("BREEAM_VERY_GOOD"),
    BREEAM_EXCELLENT("BREEAM_EXCELLENT"),
    BREEAM_OUTSTANDING("BREEAM_OUTSTANDING");

    public final String value;

    private SustainabilityCertificationsBreeamCertificationEnum(String value) {
        this.value = value;
    }
}
