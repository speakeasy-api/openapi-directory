package openapisdk.models.operations;



public class UpdateStyleGuideResponse {
    public String contentType;
    public UpdateStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public UpdateStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleGuide styleGuide;
    public UpdateStyleGuideResponse withStyleGuide(openapisdk.models.shared.StyleGuide styleGuide) {
        this.styleGuide = styleGuide;
        return this;
    }
}