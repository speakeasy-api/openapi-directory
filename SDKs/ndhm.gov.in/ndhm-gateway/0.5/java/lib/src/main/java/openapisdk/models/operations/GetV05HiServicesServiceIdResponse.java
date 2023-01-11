package openapisdk.models.operations;



public class GetV05HiServicesServiceIdResponse {
    public byte[] body;
    public GetV05HiServicesServiceIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV05HiServicesServiceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetV05HiServicesServiceIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ServiceProfileResponse serviceProfileResponse;
    public GetV05HiServicesServiceIdResponse withServiceProfileResponse(openapisdk.models.shared.ServiceProfileResponse serviceProfileResponse) {
        this.serviceProfileResponse = serviceProfileResponse;
        return this;
    }
    public Long statusCode;
    public GetV05HiServicesServiceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}