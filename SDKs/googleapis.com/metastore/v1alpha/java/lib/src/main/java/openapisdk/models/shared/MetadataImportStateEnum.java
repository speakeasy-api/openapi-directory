package openapisdk.models.shared;


public enum MetadataImportStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    UPDATING("UPDATING"),
    FAILED("FAILED");

    public final String value;

    private MetadataImportStateEnum(String value) {
        this.value = value;
    }
}
