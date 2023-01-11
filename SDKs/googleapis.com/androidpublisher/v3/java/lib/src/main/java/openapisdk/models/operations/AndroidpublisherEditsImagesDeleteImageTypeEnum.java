package openapisdk.models.operations;


public enum AndroidpublisherEditsImagesDeleteImageTypeEnum {
    APP_IMAGE_TYPE_UNSPECIFIED("appImageTypeUnspecified"),
    PHONE_SCREENSHOTS("phoneScreenshots"),
    SEVEN_INCH_SCREENSHOTS("sevenInchScreenshots"),
    TEN_INCH_SCREENSHOTS("tenInchScreenshots"),
    TV_SCREENSHOTS("tvScreenshots"),
    WEAR_SCREENSHOTS("wearScreenshots"),
    ICON("icon"),
    FEATURE_GRAPHIC("featureGraphic"),
    TV_BANNER("tvBanner");

    public final String value;

    private AndroidpublisherEditsImagesDeleteImageTypeEnum(String value) {
        this.value = value;
    }
}
