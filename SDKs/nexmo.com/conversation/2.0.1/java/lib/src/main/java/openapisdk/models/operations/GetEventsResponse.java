package openapisdk.models.operations;



public class GetEventsResponse {
    public String contentType;
    public GetEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.EventRetrieved[] eventRetrieveds;
    public GetEventsResponse withEventRetrieveds(openapisdk.models.shared.EventRetrieved[] eventRetrieveds) {
        this.eventRetrieveds = eventRetrieveds;
        return this;
    }
}