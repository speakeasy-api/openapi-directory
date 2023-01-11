package openapisdk.models.shared;


public enum SubscriptionItemPriceChangeDetailsPriceChangeStateEnum {
    PRICE_CHANGE_STATE_UNSPECIFIED("PRICE_CHANGE_STATE_UNSPECIFIED"),
    OUTSTANDING("OUTSTANDING"),
    CONFIRMED("CONFIRMED"),
    APPLIED("APPLIED");

    public final String value;

    private SubscriptionItemPriceChangeDetailsPriceChangeStateEnum(String value) {
        this.value = value;
    }
}
