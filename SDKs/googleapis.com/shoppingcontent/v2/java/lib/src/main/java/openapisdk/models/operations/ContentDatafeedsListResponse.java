package openapisdk.models.operations;



public class ContentDatafeedsListResponse {
    public String contentType;
    public ContentDatafeedsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatafeedsListResponse datafeedsListResponse;
    public ContentDatafeedsListResponse withDatafeedsListResponse(openapisdk.models.shared.DatafeedsListResponse datafeedsListResponse) {
        this.datafeedsListResponse = datafeedsListResponse;
        return this;
    }
    public Long statusCode;
    public ContentDatafeedsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}