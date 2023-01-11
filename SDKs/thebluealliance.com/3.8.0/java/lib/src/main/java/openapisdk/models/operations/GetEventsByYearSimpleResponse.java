package openapisdk.models.operations;



public class GetEventsByYearSimpleResponse {
    public String contentType;
    public GetEventsByYearSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSimple[] eventSimples;
    public GetEventsByYearSimpleResponse withEventSimples(openapisdk.models.shared.EventSimple[] eventSimples) {
        this.eventSimples = eventSimples;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventsByYearSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEventsByYearSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}