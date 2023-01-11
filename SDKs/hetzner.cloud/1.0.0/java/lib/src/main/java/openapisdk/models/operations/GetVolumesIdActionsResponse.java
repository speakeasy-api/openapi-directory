package openapisdk.models.operations;



public class GetVolumesIdActionsResponse {
    public GetVolumesIdActionsActionsResponse actionsResponse;
    public GetVolumesIdActionsResponse withActionsResponse(GetVolumesIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetVolumesIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVolumesIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}