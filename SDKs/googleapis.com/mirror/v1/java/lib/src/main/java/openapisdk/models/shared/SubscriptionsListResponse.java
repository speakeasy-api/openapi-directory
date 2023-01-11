package openapisdk.models.shared;



/**
 * SubscriptionsListResponse
 * A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
**/
public class SubscriptionsListResponse {
    public Subscription[] items;
    public SubscriptionsListResponse withItems(Subscription[] items) {
        this.items = items;
        return this;
    }
    public String kind;
    public SubscriptionsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}