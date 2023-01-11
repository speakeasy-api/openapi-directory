package openapisdk.models.operations;



public class SixGetTheMinimumPaymentAmountResponse {
    public SixGetTheMinimumPaymentAmount200ApplicationJson sixGetTheMinimumPaymentAmount200ApplicationJSONObject;
    public SixGetTheMinimumPaymentAmountResponse withSixGetTheMinimumPaymentAmount200ApplicationJsonObject(SixGetTheMinimumPaymentAmount200ApplicationJson sixGetTheMinimumPaymentAmount200ApplicationJSONObject) {
        this.sixGetTheMinimumPaymentAmount200ApplicationJSONObject = sixGetTheMinimumPaymentAmount200ApplicationJSONObject;
        return this;
    }
    public String contentType;
    public SixGetTheMinimumPaymentAmountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public SixGetTheMinimumPaymentAmountResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public SixGetTheMinimumPaymentAmountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}