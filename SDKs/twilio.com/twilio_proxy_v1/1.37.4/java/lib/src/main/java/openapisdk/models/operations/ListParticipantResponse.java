package openapisdk.models.operations;



public class ListParticipantResponse {
    public String contentType;
    public ListParticipantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListParticipantListParticipantResponse listParticipantResponse;
    public ListParticipantResponse withListParticipantResponse(ListParticipantListParticipantResponse listParticipantResponse) {
        this.listParticipantResponse = listParticipantResponse;
        return this;
    }
    public Long statusCode;
    public ListParticipantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}