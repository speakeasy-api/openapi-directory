package openapisdk.models.shared;


public enum RestoreTypeEnum {
    RESTORE_TYPE_UNSPECIFIED("RESTORE_TYPE_UNSPECIFIED"),
    FULL("FULL"),
    METADATA_ONLY("METADATA_ONLY");

    public final String value;

    private RestoreTypeEnum(String value) {
        this.value = value;
    }
}
