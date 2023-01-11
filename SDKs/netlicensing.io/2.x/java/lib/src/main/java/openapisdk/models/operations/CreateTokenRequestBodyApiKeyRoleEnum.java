package openapisdk.models.operations;


public enum CreateTokenRequestBodyApiKeyRoleEnum {
    ROLE_APIKEY_LICENSEE("ROLE_APIKEY_LICENSEE"),
    ROLE_APIKEY_ANALYTICS("ROLE_APIKEY_ANALYTICS"),
    ROLE_APIKEY_OPERATION("ROLE_APIKEY_OPERATION"),
    ROLE_APIKEY_MAINTENANCE("ROLE_APIKEY_MAINTENANCE"),
    ROLE_APIKEY_ADMIN("ROLE_APIKEY_ADMIN");

    public final String value;

    private CreateTokenRequestBodyApiKeyRoleEnum(String value) {
        this.value = value;
    }
}
