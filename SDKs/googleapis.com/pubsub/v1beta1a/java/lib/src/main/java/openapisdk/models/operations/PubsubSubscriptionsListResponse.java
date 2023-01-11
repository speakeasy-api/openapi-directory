package openapisdk.models.operations;



public class PubsubSubscriptionsListResponse {
    public String contentType;
    public PubsubSubscriptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscriptionsResponse listSubscriptionsResponse;
    public PubsubSubscriptionsListResponse withListSubscriptionsResponse(openapisdk.models.shared.ListSubscriptionsResponse listSubscriptionsResponse) {
        this.listSubscriptionsResponse = listSubscriptionsResponse;
        return this;
    }
    public Long statusCode;
    public PubsubSubscriptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}