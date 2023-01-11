package openapisdk.models.operations;



public class CreateStyleGuideResponse {
    public String contentType;
    public CreateStyleGuideResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateStyleGuideResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CreateStyleGuideResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleGuideList styleGuideList;
    public CreateStyleGuideResponse withStyleGuideList(openapisdk.models.shared.StyleGuideList styleGuideList) {
        this.styleGuideList = styleGuideList;
        return this;
    }
}