package openapisdk.models.shared;


public enum CreativeAssetIdTypeEnum {
    IMAGE("IMAGE"),
    FLASH("FLASH"),
    VIDEO("VIDEO"),
    HTML("HTML"),
    HTML_IMAGE("HTML_IMAGE"),
    AUDIO("AUDIO");

    public final String value;

    private CreativeAssetIdTypeEnum(String value) {
        this.value = value;
    }
}
