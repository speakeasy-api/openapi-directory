package openapisdk.models.operations;



public class CloudtraceProjectsTracesSpansCreateSpanResponse {
    public String contentType;
    public CloudtraceProjectsTracesSpansCreateSpanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Span span;
    public CloudtraceProjectsTracesSpansCreateSpanResponse withSpan(openapisdk.models.shared.Span span) {
        this.span = span;
        return this;
    }
    public Long statusCode;
    public CloudtraceProjectsTracesSpansCreateSpanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}