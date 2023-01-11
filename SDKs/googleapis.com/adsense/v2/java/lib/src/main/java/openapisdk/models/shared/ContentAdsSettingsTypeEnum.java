package openapisdk.models.shared;


public enum ContentAdsSettingsTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    DISPLAY("DISPLAY"),
    FEED("FEED"),
    ARTICLE("ARTICLE"),
    MATCHED_CONTENT("MATCHED_CONTENT"),
    LINK("LINK");

    public final String value;

    private ContentAdsSettingsTypeEnum(String value) {
        this.value = value;
    }
}
