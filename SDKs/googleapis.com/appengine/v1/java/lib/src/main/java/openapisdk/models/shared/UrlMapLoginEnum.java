package openapisdk.models.shared;


public enum UrlMapLoginEnum {
    LOGIN_UNSPECIFIED("LOGIN_UNSPECIFIED"),
    LOGIN_OPTIONAL("LOGIN_OPTIONAL"),
    LOGIN_ADMIN("LOGIN_ADMIN"),
    LOGIN_REQUIRED("LOGIN_REQUIRED");

    public final String value;

    private UrlMapLoginEnum(String value) {
        this.value = value;
    }
}
