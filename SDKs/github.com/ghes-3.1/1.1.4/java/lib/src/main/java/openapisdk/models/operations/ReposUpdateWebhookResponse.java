package openapisdk.models.operations;



public class ReposUpdateWebhookResponse {
    public String contentType;
    public ReposUpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposUpdateWebhookResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Hook hook;
    public ReposUpdateWebhookResponse withHook(openapisdk.models.shared.Hook hook) {
        this.hook = hook;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposUpdateWebhookResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}