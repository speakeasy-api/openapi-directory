package openapisdk.models.operations;



public class GetCommentaryFromPayRunByEmployeeResponse {
    public openapisdk.models.shared.Commentary commentary;
    public GetCommentaryFromPayRunByEmployeeResponse withCommentary(openapisdk.models.shared.Commentary commentary) {
        this.commentary = commentary;
        return this;
    }
    public String contentType;
    public GetCommentaryFromPayRunByEmployeeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCommentaryFromPayRunByEmployeeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCommentaryFromPayRunByEmployeeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}