package openapisdk.models.operations;



public class DfareportingEventTagsInsertResponse {
    public String contentType;
    public DfareportingEventTagsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventTag eventTag;
    public DfareportingEventTagsInsertResponse withEventTag(openapisdk.models.shared.EventTag eventTag) {
        this.eventTag = eventTag;
        return this;
    }
    public Long statusCode;
    public DfareportingEventTagsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}