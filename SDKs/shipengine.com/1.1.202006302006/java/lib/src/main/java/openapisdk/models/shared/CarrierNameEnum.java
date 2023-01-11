package openapisdk.models.shared;


public enum CarrierNameEnum {
    ACCESS_WORLDWIDE("access_worldwide"),
    AMAZON_BUY_SHIPPING("amazon_buy_shipping"),
    APC("apc"),
    ASENDIA("asendia"),
    AUSTRALIA_POST("australia_post"),
    CANADA_POST("canada_post"),
    DHL_ECOMMERCE("dhl_ecommerce"),
    DHL_EXPRESS("dhl_express"),
    DHL_EXPRESS_AU("dhl_express_au"),
    DHL_EXPRESS_CA("dhl_express_ca"),
    DHL_EXPRESS_UK("dhl_express_uk"),
    DPD("dpd"),
    ENDICIA("endicia"),
    FEDEX("fedex"),
    FEDEX_UK("fedex_uk"),
    FIRSTMILE("firstmile"),
    GLOBEGISTICS("globegistics"),
    IMEX("imex"),
    NEWGISTICS("newgistics"),
    ONTRAC("ontrac"),
    PUROLATOR_CANADA("purolator_canada"),
    ROYAL_MAIL("royal_mail"),
    RR_DONNELLEY("rr_donnelley"),
    SEKO("seko"),
    SENDLE("sendle"),
    STAMPS_COM("stamps_com"),
    UPS("ups");

    public final String value;

    private CarrierNameEnum(String value) {
        this.value = value;
    }
}
