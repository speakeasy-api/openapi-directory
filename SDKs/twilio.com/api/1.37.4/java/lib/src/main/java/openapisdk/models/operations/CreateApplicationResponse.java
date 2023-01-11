package openapisdk.models.operations;



public class CreateApplicationResponse {
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication;
    public CreateApplicationResponse withApiV2010AccountApplication(openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication) {
        this.apiV2010AccountApplication = apiV2010AccountApplication;
        return this;
    }
}