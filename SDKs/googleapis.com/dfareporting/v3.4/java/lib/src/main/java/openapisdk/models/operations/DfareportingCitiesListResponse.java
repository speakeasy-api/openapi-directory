package openapisdk.models.operations;



public class DfareportingCitiesListResponse {
    public openapisdk.models.shared.CitiesListResponse citiesListResponse;
    public DfareportingCitiesListResponse withCitiesListResponse(openapisdk.models.shared.CitiesListResponse citiesListResponse) {
        this.citiesListResponse = citiesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingCitiesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCitiesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}