package openapisdk.models.operations;



public class GeocodeAddressResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GeocodeAddressResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GeocodeAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GeocodeAddressResponse geocodeAddressResponse;
    public GeocodeAddressResponse withGeocodeAddressResponse(openapisdk.models.shared.GeocodeAddressResponse geocodeAddressResponse) {
        this.geocodeAddressResponse = geocodeAddressResponse;
        return this;
    }
    public Long statusCode;
    public GeocodeAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}