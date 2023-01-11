package openapisdk.models.operations;



public class DisplayvideoCustomListsListResponse {
    public String contentType;
    public DisplayvideoCustomListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomListsResponse listCustomListsResponse;
    public DisplayvideoCustomListsListResponse withListCustomListsResponse(openapisdk.models.shared.ListCustomListsResponse listCustomListsResponse) {
        this.listCustomListsResponse = listCustomListsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}