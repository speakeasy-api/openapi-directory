package openapisdk.models.shared;


public enum MessagePropertyMessengerCategoryEnum {
    RESPONSE("response"),
    UPDATE("update"),
    MESSAGE_TAG("message_tag");

    public final String value;

    private MessagePropertyMessengerCategoryEnum(String value) {
        this.value = value;
    }
}
