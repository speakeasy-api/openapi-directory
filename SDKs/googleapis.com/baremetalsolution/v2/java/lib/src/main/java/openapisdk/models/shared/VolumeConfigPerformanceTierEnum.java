package openapisdk.models.shared;


public enum VolumeConfigPerformanceTierEnum {
    VOLUME_PERFORMANCE_TIER_UNSPECIFIED("VOLUME_PERFORMANCE_TIER_UNSPECIFIED"),
    VOLUME_PERFORMANCE_TIER_SHARED("VOLUME_PERFORMANCE_TIER_SHARED"),
    VOLUME_PERFORMANCE_TIER_ASSIGNED("VOLUME_PERFORMANCE_TIER_ASSIGNED"),
    VOLUME_PERFORMANCE_TIER_HT("VOLUME_PERFORMANCE_TIER_HT");

    public final String value;

    private VolumeConfigPerformanceTierEnum(String value) {
        this.value = value;
    }
}
