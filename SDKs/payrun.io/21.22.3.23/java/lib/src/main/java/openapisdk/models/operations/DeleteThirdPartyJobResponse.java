package openapisdk.models.operations;



public class DeleteThirdPartyJobResponse {
    public String contentType;
    public DeleteThirdPartyJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteThirdPartyJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteThirdPartyJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}