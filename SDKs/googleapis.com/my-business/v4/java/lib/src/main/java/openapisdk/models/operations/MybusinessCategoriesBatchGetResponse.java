package openapisdk.models.operations;



public class MybusinessCategoriesBatchGetResponse {
    public openapisdk.models.shared.BatchGetBusinessCategoriesResponse batchGetBusinessCategoriesResponse;
    public MybusinessCategoriesBatchGetResponse withBatchGetBusinessCategoriesResponse(openapisdk.models.shared.BatchGetBusinessCategoriesResponse batchGetBusinessCategoriesResponse) {
        this.batchGetBusinessCategoriesResponse = batchGetBusinessCategoriesResponse;
        return this;
    }
    public String contentType;
    public MybusinessCategoriesBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessCategoriesBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}