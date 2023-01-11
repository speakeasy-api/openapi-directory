package openapisdk.models.operations;



public class CloudtraceProjectsTracesGetResponse {
    public String contentType;
    public CloudtraceProjectsTracesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTracesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Trace trace;
    public CloudtraceProjectsTracesGetResponse withTrace(openapisdk.models.shared.Trace trace) {
        this.trace = trace;
        return this;
    }
}