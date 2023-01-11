package openapisdk.models.operations;



public class GetPayCodesByEffectiveDateResponse {
    public String contentType;
    public GetPayCodesByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayCodesByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetPayCodesByEffectiveDateResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetPayCodesByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}