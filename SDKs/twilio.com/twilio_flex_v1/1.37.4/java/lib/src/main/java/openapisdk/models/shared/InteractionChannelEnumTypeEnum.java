package openapisdk.models.shared;


public enum InteractionChannelEnumTypeEnum {
    VOICE("voice"),
    SMS("sms"),
    EMAIL("email"),
    WEB("web"),
    WHATSAPP("whatsapp"),
    CHAT("chat"),
    MESSENGER("messenger"),
    GBM("gbm");

    public final String value;

    private InteractionChannelEnumTypeEnum(String value) {
        this.value = value;
    }
}
