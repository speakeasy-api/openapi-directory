package openapisdk.models.operations;



public class PeopleContactGroupsBatchGetResponse {
    public openapisdk.models.shared.BatchGetContactGroupsResponse batchGetContactGroupsResponse;
    public PeopleContactGroupsBatchGetResponse withBatchGetContactGroupsResponse(openapisdk.models.shared.BatchGetContactGroupsResponse batchGetContactGroupsResponse) {
        this.batchGetContactGroupsResponse = batchGetContactGroupsResponse;
        return this;
    }
    public String contentType;
    public PeopleContactGroupsBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PeopleContactGroupsBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}