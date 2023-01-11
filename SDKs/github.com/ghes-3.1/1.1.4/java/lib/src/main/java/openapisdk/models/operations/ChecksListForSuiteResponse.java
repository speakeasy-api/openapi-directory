package openapisdk.models.operations;



public class ChecksListForSuiteResponse {
    public String contentType;
    public ChecksListForSuiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChecksListForSuiteResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChecksListForSuiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ChecksListForSuite200ApplicationJson checksListForSuite200ApplicationJSONObject;
    public ChecksListForSuiteResponse withChecksListForSuite200ApplicationJsonObject(ChecksListForSuite200ApplicationJson checksListForSuite200ApplicationJSONObject) {
        this.checksListForSuite200ApplicationJSONObject = checksListForSuite200ApplicationJSONObject;
        return this;
    }
}