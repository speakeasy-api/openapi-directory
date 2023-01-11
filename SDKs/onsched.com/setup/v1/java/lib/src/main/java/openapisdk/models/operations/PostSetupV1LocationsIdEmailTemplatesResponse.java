package openapisdk.models.operations;



public class PostSetupV1LocationsIdEmailTemplatesResponse {
    public openapisdk.models.shared.ContentResult contentResult;
    public PostSetupV1LocationsIdEmailTemplatesResponse withContentResult(openapisdk.models.shared.ContentResult contentResult) {
        this.contentResult = contentResult;
        return this;
    }
    public String contentType;
    public PostSetupV1LocationsIdEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsIdEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}