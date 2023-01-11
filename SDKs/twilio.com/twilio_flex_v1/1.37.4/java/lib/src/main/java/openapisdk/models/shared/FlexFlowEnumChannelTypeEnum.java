package openapisdk.models.shared;


public enum FlexFlowEnumChannelTypeEnum {
    WEB("web"),
    SMS("sms"),
    FACEBOOK("facebook"),
    WHATSAPP("whatsapp"),
    LINE("line"),
    CUSTOM("custom");

    public final String value;

    private FlexFlowEnumChannelTypeEnum(String value) {
        this.value = value;
    }
}
