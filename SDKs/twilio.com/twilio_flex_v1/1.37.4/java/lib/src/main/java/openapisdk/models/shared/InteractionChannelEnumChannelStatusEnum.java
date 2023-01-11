package openapisdk.models.shared;


public enum InteractionChannelEnumChannelStatusEnum {
    SETUP("setup"),
    ACTIVE("active"),
    FAILED("failed"),
    CLOSED("closed");

    public final String value;

    private InteractionChannelEnumChannelStatusEnum(String value) {
        this.value = value;
    }
}
