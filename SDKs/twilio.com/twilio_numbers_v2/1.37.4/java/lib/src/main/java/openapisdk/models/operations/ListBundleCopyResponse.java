package openapisdk.models.operations;



public class ListBundleCopyResponse {
    public String contentType;
    public ListBundleCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListBundleCopyListBundleCopyResponse listBundleCopyResponse;
    public ListBundleCopyResponse withListBundleCopyResponse(ListBundleCopyListBundleCopyResponse listBundleCopyResponse) {
        this.listBundleCopyResponse = listBundleCopyResponse;
        return this;
    }
    public Long statusCode;
    public ListBundleCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}