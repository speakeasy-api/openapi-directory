package openapisdk.models.operations;



public class MybusinessAccountsLocationsBatchGetResponse {
    public openapisdk.models.shared.BatchGetLocationsResponse batchGetLocationsResponse;
    public MybusinessAccountsLocationsBatchGetResponse withBatchGetLocationsResponse(openapisdk.models.shared.BatchGetLocationsResponse batchGetLocationsResponse) {
        this.batchGetLocationsResponse = batchGetLocationsResponse;
        return this;
    }
    public String contentType;
    public MybusinessAccountsLocationsBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsLocationsBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}