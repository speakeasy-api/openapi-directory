package openapisdk.models.shared;


public enum VolumeStorageTypeEnum {
    STORAGE_TYPE_UNSPECIFIED("STORAGE_TYPE_UNSPECIFIED"),
    SSD("SSD"),
    HDD("HDD");

    public final String value;

    private VolumeStorageTypeEnum(String value) {
        this.value = value;
    }
}
