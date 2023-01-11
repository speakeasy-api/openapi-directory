package openapisdk.models.shared;


public enum RestoreServiceRequestRestoreTypeEnum {
    RESTORE_TYPE_UNSPECIFIED("RESTORE_TYPE_UNSPECIFIED"),
    FULL("FULL"),
    METADATA_ONLY("METADATA_ONLY");

    public final String value;

    private RestoreServiceRequestRestoreTypeEnum(String value) {
        this.value = value;
    }
}
