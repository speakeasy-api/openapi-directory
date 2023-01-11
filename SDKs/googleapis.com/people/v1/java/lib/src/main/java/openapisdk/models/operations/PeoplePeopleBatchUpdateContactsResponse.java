package openapisdk.models.operations;



public class PeoplePeopleBatchUpdateContactsResponse {
    public openapisdk.models.shared.BatchUpdateContactsResponse batchUpdateContactsResponse;
    public PeoplePeopleBatchUpdateContactsResponse withBatchUpdateContactsResponse(openapisdk.models.shared.BatchUpdateContactsResponse batchUpdateContactsResponse) {
        this.batchUpdateContactsResponse = batchUpdateContactsResponse;
        return this;
    }
    public String contentType;
    public PeoplePeopleBatchUpdateContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleBatchUpdateContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}