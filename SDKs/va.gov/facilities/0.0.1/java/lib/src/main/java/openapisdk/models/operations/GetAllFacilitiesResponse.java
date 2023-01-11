package openapisdk.models.operations;



public class GetAllFacilitiesResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetAllFacilitiesResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetAllFacilitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericError genericError;
    public GetAllFacilitiesResponse withGenericError(openapisdk.models.shared.GenericError genericError) {
        this.genericError = genericError;
        return this;
    }
    public openapisdk.models.shared.GeoFacilitiesResponse geoFacilitiesResponse;
    public GetAllFacilitiesResponse withGeoFacilitiesResponse(openapisdk.models.shared.GeoFacilitiesResponse geoFacilitiesResponse) {
        this.geoFacilitiesResponse = geoFacilitiesResponse;
        return this;
    }
    public Long statusCode;
    public GetAllFacilitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getAllFacilities200TextCsvString;
    public GetAllFacilitiesResponse withGetAllFacilities200TextCsvString(String getAllFacilities200TextCsvString) {
        this.getAllFacilities200TextCsvString = getAllFacilities200TextCsvString;
        return this;
    }
}