package openapisdk.models.operations;



public class GetCommentaryFromEmployeeResponse {
    public openapisdk.models.shared.Commentary commentary;
    public GetCommentaryFromEmployeeResponse withCommentary(openapisdk.models.shared.Commentary commentary) {
        this.commentary = commentary;
        return this;
    }
    public String contentType;
    public GetCommentaryFromEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCommentaryFromEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCommentaryFromEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}