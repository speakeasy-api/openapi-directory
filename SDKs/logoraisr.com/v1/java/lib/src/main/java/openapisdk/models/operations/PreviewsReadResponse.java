package openapisdk.models.operations;



public class PreviewsReadResponse {
    public String contentType;
    public PreviewsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PreviewResponse previewResponse;
    public PreviewsReadResponse withPreviewResponse(openapisdk.models.shared.PreviewResponse previewResponse) {
        this.previewResponse = previewResponse;
        return this;
    }
    public Long statusCode;
    public PreviewsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}