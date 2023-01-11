package openapisdk.models.shared;


public enum TrafficStatsDomainReputationEnum {
    REPUTATION_CATEGORY_UNSPECIFIED("REPUTATION_CATEGORY_UNSPECIFIED"),
    HIGH("HIGH"),
    MEDIUM("MEDIUM"),
    LOW("LOW"),
    BAD("BAD");

    public final String value;

    private TrafficStatsDomainReputationEnum(String value) {
        this.value = value;
    }
}
