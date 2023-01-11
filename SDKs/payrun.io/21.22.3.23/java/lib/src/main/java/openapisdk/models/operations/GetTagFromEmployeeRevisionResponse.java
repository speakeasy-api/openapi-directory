package openapisdk.models.operations;



public class GetTagFromEmployeeRevisionResponse {
    public String contentType;
    public GetTagFromEmployeeRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetTagFromEmployeeRevisionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetTagFromEmployeeRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public GetTagFromEmployeeRevisionResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}