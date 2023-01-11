package openapisdk.models.operations;



public class GetABatchOfBusinessTransactionClassificationResultsResponse {
    public String contentType;
    public GetABatchOfBusinessTransactionClassificationResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetABatchOfBusinessTransactionClassificationResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetABatchOfBusinessTransactionClassificationResults200ApplicationJson getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject;
    public GetABatchOfBusinessTransactionClassificationResultsResponse withGetABatchOfBusinessTransactionClassificationResults200ApplicationJsonObject(GetABatchOfBusinessTransactionClassificationResults200ApplicationJson getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject) {
        this.getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject = getABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject;
        return this;
    }
}