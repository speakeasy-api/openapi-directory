package openapisdk.models.operations;



public class GetIterationsResponse {
    public byte[] body;
    public GetIterationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetIterationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetIterationsResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Iteration[] iterations;
    public GetIterationsResponse withIterations(openapisdk.models.shared.Iteration[] iterations) {
        this.iterations = iterations;
        return this;
    }
    public Long statusCode;
    public GetIterationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}