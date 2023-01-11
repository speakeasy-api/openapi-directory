package openapisdk.models.shared;


public enum MetadataExportStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private MetadataExportStateEnum(String value) {
        this.value = value;
    }
}
