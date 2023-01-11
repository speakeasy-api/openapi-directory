package openapisdk.models.operations;



public class GetFacilitiesByLocationResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFacilitiesByLocationResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFacilitiesByLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacilitiesResponse facilitiesResponse;
    public GetFacilitiesByLocationResponse withFacilitiesResponse(openapisdk.models.shared.FacilitiesResponse facilitiesResponse) {
        this.facilitiesResponse = facilitiesResponse;
        return this;
    }
    public openapisdk.models.shared.GenericError genericError;
    public GetFacilitiesByLocationResponse withGenericError(openapisdk.models.shared.GenericError genericError) {
        this.genericError = genericError;
        return this;
    }
    public openapisdk.models.shared.GeoFacilitiesResponse geoFacilitiesResponse;
    public GetFacilitiesByLocationResponse withGeoFacilitiesResponse(openapisdk.models.shared.GeoFacilitiesResponse geoFacilitiesResponse) {
        this.geoFacilitiesResponse = geoFacilitiesResponse;
        return this;
    }
    public Long statusCode;
    public GetFacilitiesByLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}