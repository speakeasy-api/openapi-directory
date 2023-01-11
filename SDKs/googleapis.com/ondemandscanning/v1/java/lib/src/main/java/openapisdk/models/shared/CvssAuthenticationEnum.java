package openapisdk.models.shared;


public enum CvssAuthenticationEnum {
    AUTHENTICATION_UNSPECIFIED("AUTHENTICATION_UNSPECIFIED"),
    AUTHENTICATION_MULTIPLE("AUTHENTICATION_MULTIPLE"),
    AUTHENTICATION_SINGLE("AUTHENTICATION_SINGLE"),
    AUTHENTICATION_NONE("AUTHENTICATION_NONE");

    public final String value;

    private CvssAuthenticationEnum(String value) {
        this.value = value;
    }
}
