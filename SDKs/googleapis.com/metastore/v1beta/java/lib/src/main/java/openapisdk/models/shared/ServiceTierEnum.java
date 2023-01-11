package openapisdk.models.shared;


public enum ServiceTierEnum {
    TIER_UNSPECIFIED("TIER_UNSPECIFIED"),
    DEVELOPER("DEVELOPER"),
    ENTERPRISE("ENTERPRISE");

    public final String value;

    private ServiceTierEnum(String value) {
        this.value = value;
    }
}
