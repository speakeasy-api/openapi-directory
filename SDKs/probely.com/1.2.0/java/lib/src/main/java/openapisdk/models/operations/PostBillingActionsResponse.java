package openapisdk.models.operations;



public class PostBillingActionsResponse {
    public openapisdk.models.shared.Action action;
    public PostBillingActionsResponse withAction(openapisdk.models.shared.Action action) {
        this.action = action;
        return this;
    }
    public String contentType;
    public PostBillingActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostBillingActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}