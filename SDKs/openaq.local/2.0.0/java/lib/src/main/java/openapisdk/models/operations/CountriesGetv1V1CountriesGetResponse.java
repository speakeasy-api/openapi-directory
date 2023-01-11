package openapisdk.models.operations;



public class CountriesGetv1V1CountriesGetResponse {
    public String contentType;
    public CountriesGetv1V1CountriesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CountriesGetv1V1CountriesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult;
    public CountriesGetv1V1CountriesGetResponse withOpenAqCountriesResult(openapisdk.models.shared.OpenAqCountriesResult openAQCountriesResult) {
        this.openAQCountriesResult = openAQCountriesResult;
        return this;
    }
    public Long statusCode;
    public CountriesGetv1V1CountriesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}