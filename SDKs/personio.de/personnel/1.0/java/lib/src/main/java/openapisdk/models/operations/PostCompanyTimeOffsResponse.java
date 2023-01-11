package openapisdk.models.operations;



public class PostCompanyTimeOffsResponse {
    public String contentType;
    public PostCompanyTimeOffsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public PostCompanyTimeOffsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public PostCompanyTimeOffsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCompanyTimeOffs201ApplicationJson postCompanyTimeOffs201ApplicationJSONObject;
    public PostCompanyTimeOffsResponse withPostCompanyTimeOffs201ApplicationJsonObject(PostCompanyTimeOffs201ApplicationJson postCompanyTimeOffs201ApplicationJSONObject) {
        this.postCompanyTimeOffs201ApplicationJSONObject = postCompanyTimeOffs201ApplicationJSONObject;
        return this;
    }
}