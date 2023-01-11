package openapisdk.models.shared;


public enum BackupSourceInstanceTierEnum {
    TIER_UNSPECIFIED("TIER_UNSPECIFIED"),
    STANDARD("STANDARD"),
    PREMIUM("PREMIUM"),
    BASIC_HDD("BASIC_HDD"),
    BASIC_SSD("BASIC_SSD"),
    HIGH_SCALE_SSD("HIGH_SCALE_SSD"),
    ENTERPRISE("ENTERPRISE");

    public final String value;

    private BackupSourceInstanceTierEnum(String value) {
        this.value = value;
    }
}
