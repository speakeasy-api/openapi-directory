package openapisdk.models.operations;



public class CountriesGetV2CountriesCountryIdGetResponse {
    public String contentType;
    public CountriesGetV2CountriesCountryIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CountriesGetV2CountriesCountryIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult;
    public CountriesGetV2CountriesCountryIdGetResponse withOpenAqCountriesResult(openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult) {
        this.openAQCountriesResult = openAQCountriesResult;
        return this;
    }
    public Long statusCode;
    public CountriesGetV2CountriesCountryIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}