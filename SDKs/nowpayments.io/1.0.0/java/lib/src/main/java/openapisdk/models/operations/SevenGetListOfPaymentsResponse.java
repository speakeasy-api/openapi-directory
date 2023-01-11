package openapisdk.models.operations;



public class SevenGetListOfPaymentsResponse {
    public SevenGetListOfPayments200ApplicationJson sevenGetListOfPayments200ApplicationJSONObject;
    public SevenGetListOfPaymentsResponse withSevenGetListOfPayments200ApplicationJsonObject(SevenGetListOfPayments200ApplicationJson sevenGetListOfPayments200ApplicationJSONObject) {
        this.sevenGetListOfPayments200ApplicationJSONObject = sevenGetListOfPayments200ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public SevenGetListOfPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SevenGetListOfPaymentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public SevenGetListOfPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}