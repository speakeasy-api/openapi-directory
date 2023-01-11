package openapisdk.models.operations;



public class DfareportingEventTagsUpdateResponse {
    public String contentType;
    public DfareportingEventTagsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventTag eventTag;
    public DfareportingEventTagsUpdateResponse withEventTag(openapisdk.models.shared.EventTag eventTag) {
        this.eventTag = eventTag;
        return this;
    }
    public Long statusCode;
    public DfareportingEventTagsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}