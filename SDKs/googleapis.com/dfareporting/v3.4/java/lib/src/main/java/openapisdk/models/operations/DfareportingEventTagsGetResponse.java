package openapisdk.models.operations;



public class DfareportingEventTagsGetResponse {
    public String contentType;
    public DfareportingEventTagsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventTag eventTag;
    public DfareportingEventTagsGetResponse withEventTag(openapisdk.models.shared.EventTag eventTag) {
        this.eventTag = eventTag;
        return this;
    }
    public Long statusCode;
    public DfareportingEventTagsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}