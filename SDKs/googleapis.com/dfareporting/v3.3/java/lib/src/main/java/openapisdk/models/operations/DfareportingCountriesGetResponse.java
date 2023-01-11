package openapisdk.models.operations;



public class DfareportingCountriesGetResponse {
    public String contentType;
    public DfareportingCountriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Country country;
    public DfareportingCountriesGetResponse withCountry(openapisdk.models.shared.Country country) {
        this.country = country;
        return this;
    }
    public Long statusCode;
    public DfareportingCountriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}