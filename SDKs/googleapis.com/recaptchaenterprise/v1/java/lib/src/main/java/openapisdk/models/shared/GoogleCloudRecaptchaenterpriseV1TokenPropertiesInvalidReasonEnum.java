package openapisdk.models.shared;


public enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum {
    INVALID_REASON_UNSPECIFIED("INVALID_REASON_UNSPECIFIED"),
    UNKNOWN_INVALID_REASON("UNKNOWN_INVALID_REASON"),
    MALFORMED("MALFORMED"),
    EXPIRED("EXPIRED"),
    DUPE("DUPE"),
    MISSING("MISSING"),
    BROWSER_ERROR("BROWSER_ERROR");

    public final String value;

    private GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum(String value) {
        this.value = value;
    }
}
