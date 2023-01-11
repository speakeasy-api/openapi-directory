package openapisdk.models.operations;



public class GetPensionsByEffectiveDateResponse {
    public String contentType;
    public GetPensionsByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionsByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetPensionsByEffectiveDateResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetPensionsByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}