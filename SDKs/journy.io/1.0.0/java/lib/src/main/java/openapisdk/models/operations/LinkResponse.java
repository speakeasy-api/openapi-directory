package openapisdk.models.operations;



public class LinkResponse {
    public String contentType;
    public LinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public LinkResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public LinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Link201ApplicationJson link201ApplicationJSONObject;
    public LinkResponse withLink201ApplicationJsonObject(Link201ApplicationJson link201ApplicationJSONObject) {
        this.link201ApplicationJSONObject = link201ApplicationJSONObject;
        return this;
    }
    public Link400ApplicationJson link400ApplicationJSONObject;
    public LinkResponse withLink400ApplicationJsonObject(Link400ApplicationJson link400ApplicationJSONObject) {
        this.link400ApplicationJSONObject = link400ApplicationJSONObject;
        return this;
    }
    public Link401ApplicationJson link401ApplicationJSONObject;
    public LinkResponse withLink401ApplicationJsonObject(Link401ApplicationJson link401ApplicationJSONObject) {
        this.link401ApplicationJSONObject = link401ApplicationJSONObject;
        return this;
    }
    public Link403ApplicationJson link403ApplicationJSONObject;
    public LinkResponse withLink403ApplicationJsonObject(Link403ApplicationJson link403ApplicationJSONObject) {
        this.link403ApplicationJSONObject = link403ApplicationJSONObject;
        return this;
    }
    public Link429ApplicationJson link429ApplicationJSONObject;
    public LinkResponse withLink429ApplicationJsonObject(Link429ApplicationJson link429ApplicationJSONObject) {
        this.link429ApplicationJSONObject = link429ApplicationJSONObject;
        return this;
    }
    public Link500ApplicationJson link500ApplicationJSONObject;
    public LinkResponse withLink500ApplicationJsonObject(Link500ApplicationJson link500ApplicationJSONObject) {
        this.link500ApplicationJSONObject = link500ApplicationJSONObject;
        return this;
    }
}