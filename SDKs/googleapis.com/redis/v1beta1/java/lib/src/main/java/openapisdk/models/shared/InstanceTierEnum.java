package openapisdk.models.shared;


public enum InstanceTierEnum {
    TIER_UNSPECIFIED("TIER_UNSPECIFIED"),
    BASIC("BASIC"),
    STANDARD_HA("STANDARD_HA");

    public final String value;

    private InstanceTierEnum(String value) {
        this.value = value;
    }
}
