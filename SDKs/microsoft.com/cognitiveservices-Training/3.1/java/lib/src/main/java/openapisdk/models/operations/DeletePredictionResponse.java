package openapisdk.models.operations;



public class DeletePredictionResponse {
    public byte[] body;
    public DeletePredictionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeletePredictionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletePredictionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}