package openapisdk.models.shared;


public enum NfsExportOptionsSquashModeEnum {
    SQUASH_MODE_UNSPECIFIED("SQUASH_MODE_UNSPECIFIED"),
    NO_ROOT_SQUASH("NO_ROOT_SQUASH"),
    ROOT_SQUASH("ROOT_SQUASH");

    public final String value;

    private NfsExportOptionsSquashModeEnum(String value) {
        this.value = value;
    }
}
