package openapisdk.models.operations;



public class CorridorBatchResponse {
    public openapisdk.models.shared.BatchCorridorOut batchCorridorOut;
    public CorridorBatchResponse withBatchCorridorOut(openapisdk.models.shared.BatchCorridorOut batchCorridorOut) {
        this.batchCorridorOut = batchCorridorOut;
        return this;
    }
    public String contentType;
    public CorridorBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CorridorBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}