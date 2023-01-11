package openapisdk.models.shared;


public enum VolumeConfigTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    FLASH("FLASH"),
    DISK("DISK");

    public final String value;

    private VolumeConfigTypeEnum(String value) {
        this.value = value;
    }
}
