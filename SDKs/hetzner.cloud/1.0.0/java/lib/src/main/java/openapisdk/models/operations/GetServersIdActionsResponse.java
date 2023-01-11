package openapisdk.models.operations;



public class GetServersIdActionsResponse {
    public GetServersIdActionsActionsResponse actionsResponse;
    public GetServersIdActionsResponse withActionsResponse(GetServersIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetServersIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServersIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}