package openapisdk.models.operations;



public class PublishIterationResponse {
    public byte[] body;
    public PublishIterationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishIterationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public PublishIterationResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Boolean publishIteration200ApplicationJSONBoolean;
    public PublishIterationResponse withPublishIteration200ApplicationJsonBoolean(Boolean publishIteration200ApplicationJSONBoolean) {
        this.publishIteration200ApplicationJSONBoolean = publishIteration200ApplicationJSONBoolean;
        return this;
    }
    public Long statusCode;
    public PublishIterationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}