package openapisdk.models.shared;


public enum VolumePerformanceTierEnum {
    VOLUME_PERFORMANCE_TIER_UNSPECIFIED("VOLUME_PERFORMANCE_TIER_UNSPECIFIED"),
    VOLUME_PERFORMANCE_TIER_SHARED("VOLUME_PERFORMANCE_TIER_SHARED"),
    VOLUME_PERFORMANCE_TIER_ASSIGNED("VOLUME_PERFORMANCE_TIER_ASSIGNED"),
    VOLUME_PERFORMANCE_TIER_HT("VOLUME_PERFORMANCE_TIER_HT");

    public final String value;

    private VolumePerformanceTierEnum(String value) {
        this.value = value;
    }
}
