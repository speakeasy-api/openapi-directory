package openapisdk.models.operations;



public class AddExpiryListingsResponse {
    public Object aftermarketListingAction;
    public AddExpiryListingsResponse withAftermarketListingAction(Object aftermarketListingAction) {
        this.aftermarketListingAction = aftermarketListingAction;
        return this;
    }
    public byte[] body;
    public AddExpiryListingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddExpiryListingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public AddExpiryListingsResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public AddExpiryListingsResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public AddExpiryListingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}