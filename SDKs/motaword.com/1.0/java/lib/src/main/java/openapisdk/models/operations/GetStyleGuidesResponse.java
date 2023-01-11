package openapisdk.models.operations;



public class GetStyleGuidesResponse {
    public String contentType;
    public GetStyleGuidesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetStyleGuidesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetStyleGuidesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StyleGuideList styleGuideList;
    public GetStyleGuidesResponse withStyleGuideList(openapisdk.models.shared.StyleGuideList styleGuideList) {
        this.styleGuideList = styleGuideList;
        return this;
    }
}