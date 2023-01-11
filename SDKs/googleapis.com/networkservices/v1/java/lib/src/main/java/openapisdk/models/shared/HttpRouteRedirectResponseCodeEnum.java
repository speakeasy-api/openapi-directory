package openapisdk.models.shared;


public enum HttpRouteRedirectResponseCodeEnum {
    RESPONSE_CODE_UNSPECIFIED("RESPONSE_CODE_UNSPECIFIED"),
    MOVED_PERMANENTLY_DEFAULT("MOVED_PERMANENTLY_DEFAULT"),
    FOUND("FOUND"),
    SEE_OTHER("SEE_OTHER"),
    TEMPORARY_REDIRECT("TEMPORARY_REDIRECT"),
    PERMANENT_REDIRECT("PERMANENT_REDIRECT");

    public final String value;

    private HttpRouteRedirectResponseCodeEnum(String value) {
        this.value = value;
    }
}
