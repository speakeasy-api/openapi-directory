package openapisdk.models.operations;



public class ListReportsResponse {
    public String contentType;
    public ListReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListReports200ApplicationJson listReports200ApplicationJSONObject;
    public ListReportsResponse withListReports200ApplicationJsonObject(ListReports200ApplicationJson listReports200ApplicationJSONObject) {
        this.listReports200ApplicationJSONObject = listReports200ApplicationJSONObject;
        return this;
    }
    public Object listReports400ApplicationJSONAny;
    public ListReportsResponse withListReports400ApplicationJsonAny(Object listReports400ApplicationJSONAny) {
        this.listReports400ApplicationJSONAny = listReports400ApplicationJSONAny;
        return this;
    }
    public Object listReports401ApplicationJSONAny;
    public ListReportsResponse withListReports401ApplicationJsonAny(Object listReports401ApplicationJSONAny) {
        this.listReports401ApplicationJSONAny = listReports401ApplicationJSONAny;
        return this;
    }
}