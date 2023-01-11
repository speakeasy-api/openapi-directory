package openapisdk.models.operations;



public class GetCarrierSettingsResponse {
    public String contentType;
    public GetCarrierSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCarrierSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetCarrierSettingsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public Object getCarrierSettingsResponseBody;
    public GetCarrierSettingsResponse withGetCarrierSettingsResponseBody(Object getCarrierSettingsResponseBody) {
        this.getCarrierSettingsResponseBody = getCarrierSettingsResponseBody;
        return this;
    }
}