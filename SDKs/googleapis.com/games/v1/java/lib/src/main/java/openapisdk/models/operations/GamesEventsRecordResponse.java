package openapisdk.models.operations;



public class GamesEventsRecordResponse {
    public String contentType;
    public GamesEventsRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventUpdateResponse eventUpdateResponse;
    public GamesEventsRecordResponse withEventUpdateResponse(openapisdk.models.shared.EventUpdateResponse eventUpdateResponse) {
        this.eventUpdateResponse = eventUpdateResponse;
        return this;
    }
    public Long statusCode;
    public GamesEventsRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}