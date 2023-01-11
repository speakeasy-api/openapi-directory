package openapisdk.models.operations;



public class CountriesGetV1CountriesCountryIdGetResponse {
    public String contentType;
    public CountriesGetV1CountriesCountryIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CountriesGetV1CountriesCountryIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult;
    public CountriesGetV1CountriesCountryIdGetResponse withOpenAqCountriesResult(openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult) {
        this.openAQCountriesResult = openAQCountriesResult;
        return this;
    }
    public Long statusCode;
    public CountriesGetV1CountriesCountryIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}