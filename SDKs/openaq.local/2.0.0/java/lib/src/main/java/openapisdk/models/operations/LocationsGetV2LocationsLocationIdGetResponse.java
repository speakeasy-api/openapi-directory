package openapisdk.models.operations;



public class LocationsGetV2LocationsLocationIdGetResponse {
    public String contentType;
    public LocationsGetV2LocationsLocationIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public LocationsGetV2LocationsLocationIdGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.OpenAqResult openAQResult;
    public LocationsGetV2LocationsLocationIdGetResponse withOpenAqResult(openapisdk.models.shared.OpenAqResult openAQResult) {
        this.openAQResult = openAQResult;
        return this;
    }
    public Long statusCode;
    public LocationsGetV2LocationsLocationIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}