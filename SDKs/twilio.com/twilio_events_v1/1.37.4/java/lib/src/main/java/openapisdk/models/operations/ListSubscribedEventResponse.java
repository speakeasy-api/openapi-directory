package openapisdk.models.operations;



public class ListSubscribedEventResponse {
    public String contentType;
    public ListSubscribedEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSubscribedEventListSubscribedEventResponse listSubscribedEventResponse;
    public ListSubscribedEventResponse withListSubscribedEventResponse(ListSubscribedEventListSubscribedEventResponse listSubscribedEventResponse) {
        this.listSubscribedEventResponse = listSubscribedEventResponse;
        return this;
    }
    public Long statusCode;
    public ListSubscribedEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}