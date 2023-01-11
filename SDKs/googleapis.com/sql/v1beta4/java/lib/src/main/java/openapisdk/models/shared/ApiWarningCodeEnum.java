package openapisdk.models.shared;


public enum ApiWarningCodeEnum {
    SQL_API_WARNING_CODE_UNSPECIFIED("SQL_API_WARNING_CODE_UNSPECIFIED"),
    REGION_UNREACHABLE("REGION_UNREACHABLE"),
    MAX_RESULTS_EXCEEDS_LIMIT("MAX_RESULTS_EXCEEDS_LIMIT");

    public final String value;

    private ApiWarningCodeEnum(String value) {
        this.value = value;
    }
}
