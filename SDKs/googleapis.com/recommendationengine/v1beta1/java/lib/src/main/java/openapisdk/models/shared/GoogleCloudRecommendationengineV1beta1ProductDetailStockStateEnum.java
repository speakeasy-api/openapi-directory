package openapisdk.models.shared;


public enum GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum {
    STOCK_STATE_UNSPECIFIED("STOCK_STATE_UNSPECIFIED"),
    IN_STOCK("IN_STOCK"),
    OUT_OF_STOCK("OUT_OF_STOCK"),
    PREORDER("PREORDER"),
    BACKORDER("BACKORDER");

    public final String value;

    private GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum(String value) {
        this.value = value;
    }
}
