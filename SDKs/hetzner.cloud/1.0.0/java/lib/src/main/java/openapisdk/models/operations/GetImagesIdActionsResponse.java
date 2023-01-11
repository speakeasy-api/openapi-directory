package openapisdk.models.operations;



public class GetImagesIdActionsResponse {
    public GetImagesIdActionsActionsResponse actionsResponse;
    public GetImagesIdActionsResponse withActionsResponse(GetImagesIdActionsActionsResponse actionsResponse) {
        this.actionsResponse = actionsResponse;
        return this;
    }
    public String contentType;
    public GetImagesIdActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetImagesIdActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}