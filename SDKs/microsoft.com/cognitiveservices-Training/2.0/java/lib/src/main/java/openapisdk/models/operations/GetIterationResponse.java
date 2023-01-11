package openapisdk.models.operations;



public class GetIterationResponse {
    public byte[] body;
    public GetIterationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetIterationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Iteration iteration;
    public GetIterationResponse withIteration(openapisdk.models.shared.Iteration iteration) {
        this.iteration = iteration;
        return this;
    }
    public Long statusCode;
    public GetIterationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}