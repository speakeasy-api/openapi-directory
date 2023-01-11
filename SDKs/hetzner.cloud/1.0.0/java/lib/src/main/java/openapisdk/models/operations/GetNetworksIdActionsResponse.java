package openapisdk.models.operations;



public class GetNetworksIdActionsResponse {
    public GetNetworksIdActionsActionsResponse actionsResponse;
    public GetNetworksIdActionsResponse withActionsResponse(GetNetworksIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetNetworksIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetworksIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}