package openapisdk.models.shared;


public enum SendMessagesRequestTypeEnum {
    SMS("SMS"),
    MMS("MMS");

    public final String value;

    private SendMessagesRequestTypeEnum(String value) {
        this.value = value;
    }
}
