package openapisdk.models.shared;


public enum FromPropertyTypeEnum {
    SMS("sms"),
    VIBER_SERVICE_MSG("viber_service_msg"),
    MESSENGER("messenger"),
    WHATSAPP("whatsapp");

    public final String value;

    private FromPropertyTypeEnum(String value) {
        this.value = value;
    }
}
