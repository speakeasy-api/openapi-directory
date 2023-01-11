package openapisdk.models.shared;


public enum MessageEnumDirectionEnum {
    INBOUND("inbound"),
    OUTBOUND_API("outbound-api"),
    OUTBOUND_CALL("outbound-call"),
    OUTBOUND_REPLY("outbound-reply");

    public final String value;

    private MessageEnumDirectionEnum(String value) {
        this.value = value;
    }
}
