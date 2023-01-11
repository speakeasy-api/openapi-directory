package openapisdk.models.shared;


public enum NfsExportOptionsAccessModeEnum {
    ACCESS_MODE_UNSPECIFIED("ACCESS_MODE_UNSPECIFIED"),
    READ_ONLY("READ_ONLY"),
    READ_WRITE("READ_WRITE");

    public final String value;

    private NfsExportOptionsAccessModeEnum(String value) {
        this.value = value;
    }
}
