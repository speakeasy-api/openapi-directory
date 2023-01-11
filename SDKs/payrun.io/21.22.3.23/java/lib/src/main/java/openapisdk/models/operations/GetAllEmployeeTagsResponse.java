package openapisdk.models.operations;



public class GetAllEmployeeTagsResponse {
    public String contentType;
    public GetAllEmployeeTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetAllEmployeeTagsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetAllEmployeeTagsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetAllEmployeeTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}