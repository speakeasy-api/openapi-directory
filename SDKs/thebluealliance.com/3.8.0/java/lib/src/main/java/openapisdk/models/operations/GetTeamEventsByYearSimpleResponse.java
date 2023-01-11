package openapisdk.models.operations;



public class GetTeamEventsByYearSimpleResponse {
    public String contentType;
    public GetTeamEventsByYearSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSimple[] eventSimples;
    public GetTeamEventsByYearSimpleResponse withEventSimples(openapisdk.models.shared.EventSimple[] eventSimples) {
        this.eventSimples = eventSimples;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventsByYearSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamEventsByYearSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}