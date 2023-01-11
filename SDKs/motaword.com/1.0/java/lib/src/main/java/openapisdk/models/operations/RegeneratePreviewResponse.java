package openapisdk.models.operations;



public class RegeneratePreviewResponse {
    public String contentType;
    public RegeneratePreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegeneratePreviewResponse regeneratePreviewResponse;
    public RegeneratePreviewResponse withRegeneratePreviewResponse(openapisdk.models.shared.RegeneratePreviewResponse regeneratePreviewResponse) {
        this.regeneratePreviewResponse = regeneratePreviewResponse;
        return this;
    }
    public Long statusCode;
    public RegeneratePreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}