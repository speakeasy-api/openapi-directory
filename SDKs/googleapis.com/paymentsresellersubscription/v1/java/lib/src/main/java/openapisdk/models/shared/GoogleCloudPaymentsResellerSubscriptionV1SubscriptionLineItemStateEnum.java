package openapisdk.models.shared;


public enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum {
    LINE_ITEM_STATE_UNSPECIFIED("LINE_ITEM_STATE_UNSPECIFIED"),
    LINE_ITEM_STATE_ACTIVE("LINE_ITEM_STATE_ACTIVE"),
    LINE_ITEM_STATE_INACTIVE("LINE_ITEM_STATE_INACTIVE"),
    LINE_ITEM_STATE_NEW("LINE_ITEM_STATE_NEW"),
    LINE_ITEM_STATE_ACTIVATING("LINE_ITEM_STATE_ACTIVATING"),
    LINE_ITEM_STATE_DEACTIVATING("LINE_ITEM_STATE_DEACTIVATING"),
    LINE_ITEM_STATE_WAITING_TO_DEACTIVATE("LINE_ITEM_STATE_WAITING_TO_DEACTIVATE");

    public final String value;

    private GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum(String value) {
        this.value = value;
    }
}
