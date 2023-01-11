package openapisdk.models.shared;


public enum TelemetryConfigLogFormatEnum {
    LOG_FORMAT_UNSPECIFIED("LOG_FORMAT_UNSPECIFIED"),
    LEGACY("LEGACY"),
    JSON("JSON");

    public final String value;

    private TelemetryConfigLogFormatEnum(String value) {
        this.value = value;
    }
}
