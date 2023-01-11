package openapisdk.models.operations;



public class GetFacilityByIdResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFacilityByIdResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFacilityByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacilityReadResponse facilityReadResponse;
    public GetFacilityByIdResponse withFacilityReadResponse(openapisdk.models.shared.FacilityReadResponse facilityReadResponse) {
        this.facilityReadResponse = facilityReadResponse;
        return this;
    }
    public openapisdk.models.shared.GenericError genericError;
    public GetFacilityByIdResponse withGenericError(openapisdk.models.shared.GenericError genericError) {
        this.genericError = genericError;
        return this;
    }
    public openapisdk.models.shared.GeoFacilityReadResponse geoFacilityReadResponse;
    public GetFacilityByIdResponse withGeoFacilityReadResponse(openapisdk.models.shared.GeoFacilityReadResponse geoFacilityReadResponse) {
        this.geoFacilityReadResponse = geoFacilityReadResponse;
        return this;
    }
    public Long statusCode;
    public GetFacilityByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}