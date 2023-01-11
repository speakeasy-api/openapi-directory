package openapisdk.models.operations;



public class MybusinessbusinessinformationCategoriesBatchGetResponse {
    public openapisdk.models.shared.BatchGetCategoriesResponse batchGetCategoriesResponse;
    public MybusinessbusinessinformationCategoriesBatchGetResponse withBatchGetCategoriesResponse(openapisdk.models.shared.BatchGetCategoriesResponse batchGetCategoriesResponse) {
        this.batchGetCategoriesResponse = batchGetCategoriesResponse;
        return this;
    }
    public String contentType;
    public MybusinessbusinessinformationCategoriesBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessbusinessinformationCategoriesBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}