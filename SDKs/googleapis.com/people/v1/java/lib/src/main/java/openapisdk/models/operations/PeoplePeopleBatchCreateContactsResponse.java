package openapisdk.models.operations;



public class PeoplePeopleBatchCreateContactsResponse {
    public openapisdk.models.shared.BatchCreateContactsResponse batchCreateContactsResponse;
    public PeoplePeopleBatchCreateContactsResponse withBatchCreateContactsResponse(openapisdk.models.shared.BatchCreateContactsResponse batchCreateContactsResponse) {
        this.batchCreateContactsResponse = batchCreateContactsResponse;
        return this;
    }
    public String contentType;
    public PeoplePeopleBatchCreateContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleBatchCreateContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}