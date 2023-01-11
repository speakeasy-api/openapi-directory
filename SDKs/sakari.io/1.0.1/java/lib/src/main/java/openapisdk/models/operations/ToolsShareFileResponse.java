package openapisdk.models.operations;



public class ToolsShareFileResponse {
    public String contentType;
    public ToolsShareFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ToolsShareFileResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ShareFileResponse shareFileResponse;
    public ToolsShareFileResponse withShareFileResponse(openapisdk.models.shared.ShareFileResponse shareFileResponse) {
        this.shareFileResponse = shareFileResponse;
        return this;
    }
    public Long statusCode;
    public ToolsShareFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}