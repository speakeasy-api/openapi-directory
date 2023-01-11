package openapisdk.models.operations;



public class ConferenceHierarchyWithTeamsResponse {
    public Object[] conferences;
    public ConferenceHierarchyWithTeamsResponse withConferences(Object[] conferences) {
        this.conferences = conferences;
        return this;
    }
    public String contentType;
    public ConferenceHierarchyWithTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConferenceHierarchyWithTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}