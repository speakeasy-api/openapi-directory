package openapisdk.models.operations;



public class CountriesGetV2CountriesGetResponse {
    public String contentType;
    public CountriesGetV2CountriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CountriesGetV2CountriesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult;
    public CountriesGetV2CountriesGetResponse withOpenAqCountriesResult(openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult) {
        this.openAQCountriesResult = openAQCountriesResult;
        return this;
    }
    public Long statusCode;
    public CountriesGetV2CountriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}