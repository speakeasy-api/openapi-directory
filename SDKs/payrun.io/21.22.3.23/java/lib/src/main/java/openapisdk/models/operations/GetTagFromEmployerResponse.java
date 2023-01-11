package openapisdk.models.operations;



public class GetTagFromEmployerResponse {
    public String contentType;
    public GetTagFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetTagFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public GetTagFromEmployerResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}