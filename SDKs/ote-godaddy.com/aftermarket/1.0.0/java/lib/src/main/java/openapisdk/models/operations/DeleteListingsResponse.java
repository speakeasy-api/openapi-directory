package openapisdk.models.operations;



public class DeleteListingsResponse {
    public Object aftermarketListingAction;
    public DeleteListingsResponse withAftermarketListingAction(Object aftermarketListingAction) {
        this.aftermarketListingAction = aftermarketListingAction;
        return this;
    }
    public byte[] body;
    public DeleteListingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteListingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public DeleteListingsResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public DeleteListingsResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public DeleteListingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}