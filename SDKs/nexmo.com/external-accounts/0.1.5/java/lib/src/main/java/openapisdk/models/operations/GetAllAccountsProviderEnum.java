package openapisdk.models.operations;


public enum GetAllAccountsProviderEnum {
    MESSENGER("messenger"),
    VIBER_SERVICE_MSG("viber_service_msg"),
    WHATSAPP("whatsapp");

    public final String value;

    private GetAllAccountsProviderEnum(String value) {
        this.value = value;
    }
}
