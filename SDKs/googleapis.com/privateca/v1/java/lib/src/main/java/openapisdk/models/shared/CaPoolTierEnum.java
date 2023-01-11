package openapisdk.models.shared;


public enum CaPoolTierEnum {
    TIER_UNSPECIFIED("TIER_UNSPECIFIED"),
    ENTERPRISE("ENTERPRISE"),
    DEVOPS("DEVOPS");

    public final String value;

    private CaPoolTierEnum(String value) {
        this.value = value;
    }
}
