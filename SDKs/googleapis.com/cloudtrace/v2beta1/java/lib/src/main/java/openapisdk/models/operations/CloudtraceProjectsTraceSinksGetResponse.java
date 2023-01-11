package openapisdk.models.operations;



public class CloudtraceProjectsTraceSinksGetResponse {
    public String contentType;
    public CloudtraceProjectsTraceSinksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTraceSinksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TraceSink traceSink;
    public CloudtraceProjectsTraceSinksGetResponse withTraceSink(openapisdk.models.shared.TraceSink traceSink) {
        this.traceSink = traceSink;
        return this;
    }
}