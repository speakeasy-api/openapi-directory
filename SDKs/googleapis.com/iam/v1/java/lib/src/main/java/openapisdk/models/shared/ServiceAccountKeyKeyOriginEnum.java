package openapisdk.models.shared;


public enum ServiceAccountKeyKeyOriginEnum {
    ORIGIN_UNSPECIFIED("ORIGIN_UNSPECIFIED"),
    USER_PROVIDED("USER_PROVIDED"),
    GOOGLE_PROVIDED("GOOGLE_PROVIDED");

    public final String value;

    private ServiceAccountKeyKeyOriginEnum(String value) {
        this.value = value;
    }
}
