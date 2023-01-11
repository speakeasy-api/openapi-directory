package openapisdk.models.shared;


public enum Cvssv3ConfidentialityImpactEnum {
    IMPACT_UNSPECIFIED("IMPACT_UNSPECIFIED"),
    IMPACT_HIGH("IMPACT_HIGH"),
    IMPACT_LOW("IMPACT_LOW"),
    IMPACT_NONE("IMPACT_NONE");

    public final String value;

    private Cvssv3ConfidentialityImpactEnum(String value) {
        this.value = value;
    }
}
