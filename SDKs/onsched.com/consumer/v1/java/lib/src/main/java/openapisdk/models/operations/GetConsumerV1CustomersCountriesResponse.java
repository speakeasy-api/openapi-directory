package openapisdk.models.operations;



public class GetConsumerV1CustomersCountriesResponse {
    public String contentType;
    public GetConsumerV1CustomersCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CountryViewModel[] countryViewModels;
    public GetConsumerV1CustomersCountriesResponse withCountryViewModels(openapisdk.models.shared.CountryViewModel[] countryViewModels) {
        this.countryViewModels = countryViewModels;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1CustomersCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}