package openapisdk.models.shared;



/**
 * GoogleLongrunningListOperationsResponse
 * The response message for Operations.ListOperations.
**/
public class GoogleLongrunningListOperationsResponse {
    public String nextPageToken;
    public GoogleLongrunningListOperationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleLongrunningOperation[] operations;
    public GoogleLongrunningListOperationsResponse withOperations(GoogleLongrunningOperation[] operations) {
        this.operations = operations;
        return this;
    }
}