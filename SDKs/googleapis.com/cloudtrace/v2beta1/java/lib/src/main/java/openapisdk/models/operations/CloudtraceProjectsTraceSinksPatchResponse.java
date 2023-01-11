package openapisdk.models.operations;



public class CloudtraceProjectsTraceSinksPatchResponse {
    public String contentType;
    public CloudtraceProjectsTraceSinksPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTraceSinksPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TraceSink traceSink;
    public CloudtraceProjectsTraceSinksPatchResponse withTraceSink(openapisdk.models.shared.TraceSink traceSink) {
        this.traceSink = traceSink;
        return this;
    }
}