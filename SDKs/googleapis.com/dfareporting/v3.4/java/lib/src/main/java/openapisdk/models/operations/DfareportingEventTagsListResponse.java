package openapisdk.models.operations;



public class DfareportingEventTagsListResponse {
    public String contentType;
    public DfareportingEventTagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventTagsListResponse eventTagsListResponse;
    public DfareportingEventTagsListResponse withEventTagsListResponse(openapisdk.models.shared.EventTagsListResponse eventTagsListResponse) {
        this.eventTagsListResponse = eventTagsListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingEventTagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}