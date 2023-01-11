package openapisdk.models.operations;



public class GetStyleGuideResponse {
    public String contentType;
    public GetStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleGuide styleGuide;
    public GetStyleGuideResponse withStyleGuide(openapisdk.models.shared.StyleGuide styleGuide) {
        this.styleGuide = styleGuide;
        return this;
    }
}