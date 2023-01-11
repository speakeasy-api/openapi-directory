package openapisdk.models.operations;



public class GetABatchOfConsumerTransactionClassificationResultsResponse {
    public String contentType;
    public GetABatchOfConsumerTransactionClassificationResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetABatchOfConsumerTransactionClassificationResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetABatchOfConsumerTransactionClassificationResults200ApplicationJson getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject;
    public GetABatchOfConsumerTransactionClassificationResultsResponse withGetABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject(GetABatchOfConsumerTransactionClassificationResults200ApplicationJson getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject) {
        this.getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject = getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject;
        return this;
    }
}