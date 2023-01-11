package openapisdk.models.operations;



public class GetInfoInfoGetResponse {
    public String contentType;
    public GetInfoInfoGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetInfoInfoGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.InfoResponse infoResponse;
    public GetInfoInfoGetResponse withInfoResponse(openapisdk.models.shared.InfoResponse infoResponse) {
        this.infoResponse = infoResponse;
        return this;
    }
    public Long statusCode;
    public GetInfoInfoGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}