package openapisdk.models.operations;


public enum CreateTokenRequestBodyTokenTypeEnum {
    DEFAULT_("DEFAULT"),
    SHOP("SHOP"),
    APIKEY("APIKEY");

    public final String value;

    private CreateTokenRequestBodyTokenTypeEnum(String value) {
        this.value = value;
    }
}
