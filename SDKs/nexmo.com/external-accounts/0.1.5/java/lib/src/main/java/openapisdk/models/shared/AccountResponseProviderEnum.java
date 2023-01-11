package openapisdk.models.shared;


public enum AccountResponseProviderEnum {
    MESSENGER("messenger"),
    VIBER_SERVICE_MSG("viber_service_msg"),
    WHATSAPP("whatsapp");

    public final String value;

    private AccountResponseProviderEnum(String value) {
        this.value = value;
    }
}
