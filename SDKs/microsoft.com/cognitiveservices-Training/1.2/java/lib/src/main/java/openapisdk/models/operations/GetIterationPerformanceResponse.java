package openapisdk.models.operations;



public class GetIterationPerformanceResponse {
    public byte[] body;
    public GetIterationPerformanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetIterationPerformanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IterationPerformance iterationPerformance;
    public GetIterationPerformanceResponse withIterationPerformance(openapisdk.models.shared.IterationPerformance iterationPerformance) {
        this.iterationPerformance = iterationPerformance;
        return this;
    }
    public Long statusCode;
    public GetIterationPerformanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}