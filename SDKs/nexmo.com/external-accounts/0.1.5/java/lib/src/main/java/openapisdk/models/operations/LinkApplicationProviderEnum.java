package openapisdk.models.operations;


public enum LinkApplicationProviderEnum {
    MESSENGER("messenger"),
    VIBER_SERVICE_MSG("viber_service_msg"),
    WHATSAPP("whatsapp");

    public final String value;

    private LinkApplicationProviderEnum(String value) {
        this.value = value;
    }
}
