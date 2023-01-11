package openapisdk.models.shared;


public enum ApiConfigHandlerAuthFailActionEnum {
    AUTH_FAIL_ACTION_UNSPECIFIED("AUTH_FAIL_ACTION_UNSPECIFIED"),
    AUTH_FAIL_ACTION_REDIRECT("AUTH_FAIL_ACTION_REDIRECT"),
    AUTH_FAIL_ACTION_UNAUTHORIZED("AUTH_FAIL_ACTION_UNAUTHORIZED");

    public final String value;

    private ApiConfigHandlerAuthFailActionEnum(String value) {
        this.value = value;
    }
}
