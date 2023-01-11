package openapisdk.models.shared;


public enum CvssConfidentialityImpactEnum {
    IMPACT_UNSPECIFIED("IMPACT_UNSPECIFIED"),
    IMPACT_HIGH("IMPACT_HIGH"),
    IMPACT_LOW("IMPACT_LOW"),
    IMPACT_NONE("IMPACT_NONE");

    public final String value;

    private CvssConfidentialityImpactEnum(String value) {
        this.value = value;
    }
}
