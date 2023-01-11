package openapisdk.models.shared;


public enum ConversationEnumStateEnum {
    INACTIVE("inactive"),
    ACTIVE("active"),
    CLOSED("closed");

    public final String value;

    private ConversationEnumStateEnum(String value) {
        this.value = value;
    }
}
