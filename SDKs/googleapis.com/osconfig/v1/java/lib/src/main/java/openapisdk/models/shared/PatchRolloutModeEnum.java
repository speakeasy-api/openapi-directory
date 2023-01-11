package openapisdk.models.shared;


public enum PatchRolloutModeEnum {
    MODE_UNSPECIFIED("MODE_UNSPECIFIED"),
    ZONE_BY_ZONE("ZONE_BY_ZONE"),
    CONCURRENT_ZONES("CONCURRENT_ZONES");

    public final String value;

    private PatchRolloutModeEnum(String value) {
        this.value = value;
    }
}
