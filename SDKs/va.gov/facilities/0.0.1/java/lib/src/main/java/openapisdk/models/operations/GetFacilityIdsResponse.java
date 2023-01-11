package openapisdk.models.operations;



public class GetFacilityIdsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFacilityIdsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFacilityIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacilitiesIdsResponse facilitiesIdsResponse;
    public GetFacilityIdsResponse withFacilitiesIdsResponse(openapisdk.models.shared.FacilitiesIdsResponse facilitiesIdsResponse) {
        this.facilitiesIdsResponse = facilitiesIdsResponse;
        return this;
    }
    public openapisdk.models.shared.GenericError genericError;
    public GetFacilityIdsResponse withGenericError(openapisdk.models.shared.GenericError genericError) {
        this.genericError = genericError;
        return this;
    }
    public Long statusCode;
    public GetFacilityIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}