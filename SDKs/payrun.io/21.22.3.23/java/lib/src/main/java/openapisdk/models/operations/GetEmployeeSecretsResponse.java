package openapisdk.models.operations;



public class GetEmployeeSecretsResponse {
    public String contentType;
    public GetEmployeeSecretsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployeeSecretsResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetEmployeeSecretsResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetEmployeeSecretsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}