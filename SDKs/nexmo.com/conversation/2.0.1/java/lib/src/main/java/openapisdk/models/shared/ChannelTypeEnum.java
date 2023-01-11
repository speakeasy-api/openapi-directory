package openapisdk.models.shared;


public enum ChannelTypeEnum {
    APP("app"),
    PHONE("phone"),
    SIP("sip"),
    WEBSOCKET("websocket"),
    VBC("vbc");

    public final String value;

    private ChannelTypeEnum(String value) {
        this.value = value;
    }
}
