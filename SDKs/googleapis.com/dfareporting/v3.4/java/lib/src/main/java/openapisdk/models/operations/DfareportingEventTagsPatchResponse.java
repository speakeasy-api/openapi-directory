package openapisdk.models.operations;



public class DfareportingEventTagsPatchResponse {
    public String contentType;
    public DfareportingEventTagsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventTag eventTag;
    public DfareportingEventTagsPatchResponse withEventTag(openapisdk.models.shared.EventTag eventTag) {
        this.eventTag = eventTag;
        return this;
    }
    public Long statusCode;
    public DfareportingEventTagsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}