package openapisdk.models.operations;



public class CitiesGetV2CitiesGetResponse {
    public String contentType;
    public CitiesGetV2CitiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CitiesGetV2CitiesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCitiesResult openAQCitiesResult;
    public CitiesGetV2CitiesGetResponse withOpenAqCitiesResult(openapisdk.models.shared.OpenAqCitiesResult openAQCitiesResult) {
        this.openAQCitiesResult = openAQCitiesResult;
        return this;
    }
    public Long statusCode;
    public CitiesGetV2CitiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}