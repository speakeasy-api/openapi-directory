package openapisdk.models.shared;


public enum CreativeAssetRoleEnum {
    PRIMARY("PRIMARY"),
    BACKUP_IMAGE("BACKUP_IMAGE"),
    ADDITIONAL_IMAGE("ADDITIONAL_IMAGE"),
    ADDITIONAL_FLASH("ADDITIONAL_FLASH"),
    PARENT_VIDEO("PARENT_VIDEO"),
    TRANSCODED_VIDEO("TRANSCODED_VIDEO"),
    OTHER("OTHER"),
    ALTERNATE_VIDEO("ALTERNATE_VIDEO"),
    PARENT_AUDIO("PARENT_AUDIO"),
    TRANSCODED_AUDIO("TRANSCODED_AUDIO");

    public final String value;

    private CreativeAssetRoleEnum(String value) {
        this.value = value;
    }
}
