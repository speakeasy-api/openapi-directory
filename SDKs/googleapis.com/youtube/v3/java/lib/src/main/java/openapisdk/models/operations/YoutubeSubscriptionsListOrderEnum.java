package openapisdk.models.operations;


public enum YoutubeSubscriptionsListOrderEnum {
    SUBSCRIPTION_ORDER_UNSPECIFIED("subscriptionOrderUnspecified"),
    RELEVANCE("relevance"),
    UNREAD("unread"),
    ALPHABETICAL("alphabetical");

    public final String value;

    private YoutubeSubscriptionsListOrderEnum(String value) {
        this.value = value;
    }
}
