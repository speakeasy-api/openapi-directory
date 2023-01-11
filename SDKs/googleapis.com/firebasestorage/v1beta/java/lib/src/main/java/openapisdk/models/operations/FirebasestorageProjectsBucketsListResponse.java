package openapisdk.models.operations;



public class FirebasestorageProjectsBucketsListResponse {
    public String contentType;
    public FirebasestorageProjectsBucketsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListBucketsResponse listBucketsResponse;
    public FirebasestorageProjectsBucketsListResponse withListBucketsResponse(openapisdk.models.shared.ListBucketsResponse listBucketsResponse) {
        this.listBucketsResponse = listBucketsResponse;
        return this;
    }
    public Long statusCode;
    public FirebasestorageProjectsBucketsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}