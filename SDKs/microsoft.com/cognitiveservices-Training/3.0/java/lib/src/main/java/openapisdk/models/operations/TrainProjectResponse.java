package openapisdk.models.operations;



public class TrainProjectResponse {
    public byte[] body;
    public TrainProjectResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TrainProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public TrainProjectResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public openapisdk.models.shared.Iteration iteration;
    public TrainProjectResponse withIteration(openapisdk.models.shared.Iteration iteration) {
        this.iteration = iteration;
        return this;
    }
    public Long statusCode;
    public TrainProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}