package openapisdk.models.operations;


public enum AndroidpublisherEditsImagesListImageTypeEnum {
    FEATURE_GRAPHIC("featureGraphic"),
    ICON("icon"),
    PHONE_SCREENSHOTS("phoneScreenshots"),
    PROMO_GRAPHIC("promoGraphic"),
    SEVEN_INCH_SCREENSHOTS("sevenInchScreenshots"),
    TEN_INCH_SCREENSHOTS("tenInchScreenshots"),
    TV_BANNER("tvBanner"),
    TV_SCREENSHOTS("tvScreenshots"),
    WEAR_SCREENSHOTS("wearScreenshots");

    public final String value;

    private AndroidpublisherEditsImagesListImageTypeEnum(String value) {
        this.value = value;
    }
}
