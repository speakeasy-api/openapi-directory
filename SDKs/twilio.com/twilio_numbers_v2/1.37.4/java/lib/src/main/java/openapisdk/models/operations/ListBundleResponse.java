package openapisdk.models.operations;



public class ListBundleResponse {
    public String contentType;
    public ListBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListBundleListBundleResponse listBundleResponse;
    public ListBundleResponse withListBundleResponse(ListBundleListBundleResponse listBundleResponse) {
        this.listBundleResponse = listBundleResponse;
        return this;
    }
    public Long statusCode;
    public ListBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}