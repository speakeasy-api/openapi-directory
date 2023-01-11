package openapisdk.models.operations;



public class DfareportingCountriesListResponse {
    public String contentType;
    public DfareportingCountriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CountriesListResponse countriesListResponse;
    public DfareportingCountriesListResponse withCountriesListResponse(openapisdk.models.shared.CountriesListResponse countriesListResponse) {
        this.countriesListResponse = countriesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingCountriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}