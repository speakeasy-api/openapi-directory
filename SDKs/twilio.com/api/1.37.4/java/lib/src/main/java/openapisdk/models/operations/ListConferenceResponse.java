package openapisdk.models.operations;



public class ListConferenceResponse {
    public String contentType;
    public ListConferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConferenceListConferenceResponse listConferenceResponse;
    public ListConferenceResponse withListConferenceResponse(ListConferenceListConferenceResponse listConferenceResponse) {
        this.listConferenceResponse = listConferenceResponse;
        return this;
    }
    public Long statusCode;
    public ListConferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}