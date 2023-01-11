package openapisdk.models.operations;



public class GetNearbyFacilitiesResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetNearbyFacilitiesResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetNearbyFacilitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericError genericError;
    public GetNearbyFacilitiesResponse withGenericError(openapisdk.models.shared.GenericError genericError) {
        this.genericError = genericError;
        return this;
    }
    public openapisdk.models.shared.NearbyResponse nearbyResponse;
    public GetNearbyFacilitiesResponse withNearbyResponse(openapisdk.models.shared.NearbyResponse nearbyResponse) {
        this.nearbyResponse = nearbyResponse;
        return this;
    }
    public Long statusCode;
    public GetNearbyFacilitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}