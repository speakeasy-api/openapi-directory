package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication;
    public UpdateApplicationResponse withApiV2010AccountApplication(openapisdk.models.shared.ApiV2010AccountApplication apiV2010AccountApplication) {
        this.apiV2010AccountApplication = apiV2010AccountApplication;
        return this;
    }
}