package openapisdk.models.operations;



public class GetReportResponse {
    public String contentType;
    public GetReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getReport200ApplicationJSONOneOf;
    public GetReportResponse withGetReport200ApplicationJsonOneOf(Object getReport200ApplicationJSONOneOf) {
        this.getReport200ApplicationJSONOneOf = getReport200ApplicationJSONOneOf;
        return this;
    }
    public Object getReport401ApplicationJSONAny;
    public GetReportResponse withGetReport401ApplicationJsonAny(Object getReport401ApplicationJSONAny) {
        this.getReport401ApplicationJSONAny = getReport401ApplicationJSONAny;
        return this;
    }
    public Object getReport404ApplicationJSONAny;
    public GetReportResponse withGetReport404ApplicationJsonAny(Object getReport404ApplicationJSONAny) {
        this.getReport404ApplicationJSONAny = getReport404ApplicationJSONAny;
        return this;
    }
}