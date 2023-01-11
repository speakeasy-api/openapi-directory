package openapisdk.models.shared;


public enum FloodlightActivityStatusEnum {
    ACTIVE("ACTIVE"),
    ARCHIVED_AND_DISABLED("ARCHIVED_AND_DISABLED"),
    ARCHIVED("ARCHIVED"),
    DISABLED_POLICY("DISABLED_POLICY");

    public final String value;

    private FloodlightActivityStatusEnum(String value) {
        this.value = value;
    }
}
