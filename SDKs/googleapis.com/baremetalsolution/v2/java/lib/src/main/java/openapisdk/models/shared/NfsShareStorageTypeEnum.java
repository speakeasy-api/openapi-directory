package openapisdk.models.shared;


public enum NfsShareStorageTypeEnum {
    STORAGE_TYPE_UNSPECIFIED("STORAGE_TYPE_UNSPECIFIED"),
    SSD("SSD"),
    HDD("HDD");

    public final String value;

    private NfsShareStorageTypeEnum(String value) {
        this.value = value;
    }
}
