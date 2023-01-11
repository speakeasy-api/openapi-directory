package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1ListBrokersResponse
 * The response for the `ListBrokers()` method.
**/
public class GoogleCloudServicebrokerV1beta1ListBrokersResponse {
    public GoogleCloudServicebrokerV1beta1Broker[] brokers;
    public GoogleCloudServicebrokerV1beta1ListBrokersResponse withBrokers(GoogleCloudServicebrokerV1beta1Broker[] brokers) {
        this.brokers = brokers;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudServicebrokerV1beta1ListBrokersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}