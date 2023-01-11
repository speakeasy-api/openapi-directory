package openapisdk.models.operations;



public class DisplayvideoCustomListsGetResponse {
    public String contentType;
    public DisplayvideoCustomListsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomList customList;
    public DisplayvideoCustomListsGetResponse withCustomList(openapisdk.models.shared.CustomList customList) {
        this.customList = customList;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomListsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}