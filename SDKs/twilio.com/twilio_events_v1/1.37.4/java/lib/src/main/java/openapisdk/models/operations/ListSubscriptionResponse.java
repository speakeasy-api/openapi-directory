package openapisdk.models.operations;



public class ListSubscriptionResponse {
    public String contentType;
    public ListSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSubscriptionListSubscriptionResponse listSubscriptionResponse;
    public ListSubscriptionResponse withListSubscriptionResponse(ListSubscriptionListSubscriptionResponse listSubscriptionResponse) {
        this.listSubscriptionResponse = listSubscriptionResponse;
        return this;
    }
    public Long statusCode;
    public ListSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}