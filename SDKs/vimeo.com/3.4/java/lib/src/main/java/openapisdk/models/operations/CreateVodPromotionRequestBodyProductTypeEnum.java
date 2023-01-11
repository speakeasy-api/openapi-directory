package openapisdk.models.operations;


public enum CreateVodPromotionRequestBodyProductTypeEnum {
    ANY("any"),
    BUY("buy"),
    BUY_EPISODE("buy_episode"),
    RENT("rent"),
    RENT_EPISODE("rent_episode"),
    SUBSCRIBE("subscribe");

    public final String value;

    private CreateVodPromotionRequestBodyProductTypeEnum(String value) {
        this.value = value;
    }
}
