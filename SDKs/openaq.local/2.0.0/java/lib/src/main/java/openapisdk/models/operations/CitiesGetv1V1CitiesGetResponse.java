package openapisdk.models.operations;



public class CitiesGetv1V1CitiesGetResponse {
    public String contentType;
    public CitiesGetv1V1CitiesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public CitiesGetv1V1CitiesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqCitiesResult openAQCitiesResult;
    public CitiesGetv1V1CitiesGetResponse withOpenAqCitiesResult(openapisdk.models.shared.OpenAqCitiesResult openAQCitiesResult) {
        this.openAQCitiesResult = openAQCitiesResult;
        return this;
    }
    public Long statusCode;
    public CitiesGetv1V1CitiesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}