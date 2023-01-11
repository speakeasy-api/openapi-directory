package openapisdk.models.operations;



public class ListBucketResponse {
    public String contentType;
    public ListBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListBucketListBucketResponse listBucketResponse;
    public ListBucketResponse withListBucketResponse(ListBucketListBucketResponse listBucketResponse) {
        this.listBucketResponse = listBucketResponse;
        return this;
    }
    public Long statusCode;
    public ListBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}