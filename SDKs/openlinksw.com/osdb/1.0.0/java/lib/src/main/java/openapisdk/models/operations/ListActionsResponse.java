package openapisdk.models.operations;



public class ListActionsResponse {
    public String contentType;
    public ListActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public ListActionsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.ListActionsResponse listActionsResponse;
    public ListActionsResponse withListActionsResponse(openapisdk.models.shared.ListActionsResponse listActionsResponse) {
        this.listActionsResponse = listActionsResponse;
        return this;
    }
    public Long statusCode;
    public ListActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}