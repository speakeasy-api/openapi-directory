package openapisdk.models.operations;



public class GetTeamEventsSimpleResponse {
    public String contentType;
    public GetTeamEventsSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSimple[] eventSimples;
    public GetTeamEventsSimpleResponse withEventSimples(openapisdk.models.shared.EventSimple[] eventSimples) {
        this.eventSimples = eventSimples;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}