package openapisdk.models.shared;


public enum CvssAvailabilityImpactEnum {
    IMPACT_UNSPECIFIED("IMPACT_UNSPECIFIED"),
    IMPACT_HIGH("IMPACT_HIGH"),
    IMPACT_LOW("IMPACT_LOW"),
    IMPACT_NONE("IMPACT_NONE");

    public final String value;

    private CvssAvailabilityImpactEnum(String value) {
        this.value = value;
    }
}
