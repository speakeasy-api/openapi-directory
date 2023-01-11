package openapisdk.models.operations;



public class UpdateIterationResponse {
    public byte[] body;
    public UpdateIterationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateIterationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Iteration iteration;
    public UpdateIterationResponse withIteration(openapisdk.models.shared.Iteration iteration) {
        this.iteration = iteration;
        return this;
    }
    public Long statusCode;
    public UpdateIterationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}