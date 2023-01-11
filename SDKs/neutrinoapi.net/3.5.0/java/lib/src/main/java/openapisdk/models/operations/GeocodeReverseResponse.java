package openapisdk.models.operations;



public class GeocodeReverseResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GeocodeReverseResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GeocodeReverseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GeocodeReverseResponse geocodeReverseResponse;
    public GeocodeReverseResponse withGeocodeReverseResponse(openapisdk.models.shared.GeocodeReverseResponse geocodeReverseResponse) {
        this.geocodeReverseResponse = geocodeReverseResponse;
        return this;
    }
    public Long statusCode;
    public GeocodeReverseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}