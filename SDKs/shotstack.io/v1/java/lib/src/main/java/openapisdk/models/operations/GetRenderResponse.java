package openapisdk.models.operations;



public class GetRenderResponse {
    public String contentType;
    public GetRenderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RenderResponse renderResponse;
    public GetRenderResponse withRenderResponse(openapisdk.models.shared.RenderResponse renderResponse) {
        this.renderResponse = renderResponse;
        return this;
    }
    public Long statusCode;
    public GetRenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}