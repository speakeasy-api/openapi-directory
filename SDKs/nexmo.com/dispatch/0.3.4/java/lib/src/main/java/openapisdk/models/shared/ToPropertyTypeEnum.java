package openapisdk.models.shared;


public enum ToPropertyTypeEnum {
    SMS("sms"),
    VIBER_SERVICE_MSG("viber_service_msg"),
    MESSENGER("messenger"),
    WHATSAPP("whatsapp");

    public final String value;

    private ToPropertyTypeEnum(String value) {
        this.value = value;
    }
}
