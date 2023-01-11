package openapisdk.models.operations;



public class PostTargetActionsResponse {
    public openapisdk.models.shared.Actions[] actions;
    public PostTargetActionsResponse withActions(openapisdk.models.shared.Actions[] actions) {
        this.actions = actions;
        return this;
    }
    public String contentType;
    public PostTargetActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTargetActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}