package openapisdk.models.operations;



public class CloudtraceProjectsTraceSinksCreateResponse {
    public String contentType;
    public CloudtraceProjectsTraceSinksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTraceSinksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TraceSink traceSink;
    public CloudtraceProjectsTraceSinksCreateResponse withTraceSink(openapisdk.models.shared.TraceSink traceSink) {
        this.traceSink = traceSink;
        return this;
    }
}