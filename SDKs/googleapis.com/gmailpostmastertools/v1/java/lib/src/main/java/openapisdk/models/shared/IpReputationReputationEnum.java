package openapisdk.models.shared;


public enum IpReputationReputationEnum {
    REPUTATION_CATEGORY_UNSPECIFIED("REPUTATION_CATEGORY_UNSPECIFIED"),
    HIGH("HIGH"),
    MEDIUM("MEDIUM"),
    LOW("LOW"),
    BAD("BAD");

    public final String value;

    private IpReputationReputationEnum(String value) {
        this.value = value;
    }
}
