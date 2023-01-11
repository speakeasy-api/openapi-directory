package openapisdk.models.operations;



public class CancelReportResponse {
    public String contentType;
    public CancelReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CancelReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object cancelReport200ApplicationJSONOneOf;
    public CancelReportResponse withCancelReport200ApplicationJsonOneOf(Object cancelReport200ApplicationJSONOneOf) {
        this.cancelReport200ApplicationJSONOneOf = cancelReport200ApplicationJSONOneOf;
        return this;
    }
    public Object cancelReport401ApplicationJSONAny;
    public CancelReportResponse withCancelReport401ApplicationJsonAny(Object cancelReport401ApplicationJSONAny) {
        this.cancelReport401ApplicationJSONAny = cancelReport401ApplicationJSONAny;
        return this;
    }
    public Object cancelReport404ApplicationJSONAny;
    public CancelReportResponse withCancelReport404ApplicationJsonAny(Object cancelReport404ApplicationJSONAny) {
        this.cancelReport404ApplicationJSONAny = cancelReport404ApplicationJSONAny;
        return this;
    }
    public Object cancelReport409ApplicationJSONAny;
    public CancelReportResponse withCancelReport409ApplicationJsonAny(Object cancelReport409ApplicationJSONAny) {
        this.cancelReport409ApplicationJSONAny = cancelReport409ApplicationJSONAny;
        return this;
    }
}