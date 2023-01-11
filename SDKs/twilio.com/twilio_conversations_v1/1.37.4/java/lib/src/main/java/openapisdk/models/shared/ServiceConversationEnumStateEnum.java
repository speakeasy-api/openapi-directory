package openapisdk.models.shared;


public enum ServiceConversationEnumStateEnum {
    INACTIVE("inactive"),
    ACTIVE("active"),
    CLOSED("closed");

    public final String value;

    private ServiceConversationEnumStateEnum(String value) {
        this.value = value;
    }
}
