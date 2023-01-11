package openapisdk.models.operations;



public class GetDistrictEventsSimpleResponse {
    public String contentType;
    public GetDistrictEventsSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSimple[] eventSimples;
    public GetDistrictEventsSimpleResponse withEventSimples(openapisdk.models.shared.EventSimple[] eventSimples) {
        this.eventSimples = eventSimples;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDistrictEventsSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDistrictEventsSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}