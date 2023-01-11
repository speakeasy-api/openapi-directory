package openapisdk.models.operations;



public class DeleteCisLineTypeTagResponse {
    public String contentType;
    public DeleteCisLineTypeTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisLineTypeTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisLineTypeTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}