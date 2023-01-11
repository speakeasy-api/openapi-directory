package openapisdk.models.operations;



public class GetEventsResponse {
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventRecord[] eventRecords;
    public GetEventsResponse withEventRecords(openapisdk.models.shared.EventRecord[] eventRecords) {
        this.eventRecords = eventRecords;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}