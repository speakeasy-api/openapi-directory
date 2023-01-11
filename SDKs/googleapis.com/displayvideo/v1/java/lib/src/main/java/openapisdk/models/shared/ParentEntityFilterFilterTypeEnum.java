package openapisdk.models.shared;


public enum ParentEntityFilterFilterTypeEnum {
    FILTER_TYPE_UNSPECIFIED("FILTER_TYPE_UNSPECIFIED"),
    FILTER_TYPE_NONE("FILTER_TYPE_NONE"),
    FILTER_TYPE_ADVERTISER_ID("FILTER_TYPE_ADVERTISER_ID"),
    FILTER_TYPE_CAMPAIGN_ID("FILTER_TYPE_CAMPAIGN_ID"),
    FILTER_TYPE_MEDIA_PRODUCT_ID("FILTER_TYPE_MEDIA_PRODUCT_ID"),
    FILTER_TYPE_INSERTION_ORDER_ID("FILTER_TYPE_INSERTION_ORDER_ID"),
    FILTER_TYPE_LINE_ITEM_ID("FILTER_TYPE_LINE_ITEM_ID");

    public final String value;

    private ParentEntityFilterFilterTypeEnum(String value) {
        this.value = value;
    }
}
