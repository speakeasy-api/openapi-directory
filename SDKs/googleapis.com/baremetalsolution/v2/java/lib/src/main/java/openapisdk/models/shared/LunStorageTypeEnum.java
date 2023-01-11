package openapisdk.models.shared;


public enum LunStorageTypeEnum {
    STORAGE_TYPE_UNSPECIFIED("STORAGE_TYPE_UNSPECIFIED"),
    SSD("SSD"),
    HDD("HDD");

    public final String value;

    private LunStorageTypeEnum(String value) {
        this.value = value;
    }
}
