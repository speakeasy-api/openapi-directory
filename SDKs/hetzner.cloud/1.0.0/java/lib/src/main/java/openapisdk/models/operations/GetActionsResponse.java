package openapisdk.models.operations;



public class GetActionsResponse {
    public GetActionsActionsResponse actionsResponse;
    public GetActionsResponse withActionsResponse(GetActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}