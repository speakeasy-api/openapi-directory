package openapisdk.models.shared;


public enum UserConversationEnumStateEnum {
    INACTIVE("inactive"),
    ACTIVE("active"),
    CLOSED("closed");

    public final String value;

    private UserConversationEnumStateEnum(String value) {
        this.value = value;
    }
}
