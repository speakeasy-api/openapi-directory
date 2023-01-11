package openapisdk.models.operations;



public class Locationsv1GetV1LocationsLocationIdGetResponse {
    public String contentType;
    public Locationsv1GetV1LocationsLocationIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public Locationsv1GetV1LocationsLocationIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public Locationsv1GetV1LocationsLocationIdGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public Locationsv1GetV1LocationsLocationIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}