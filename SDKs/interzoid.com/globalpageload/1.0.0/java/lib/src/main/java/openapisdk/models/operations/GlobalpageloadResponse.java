package openapisdk.models.operations;



public class GlobalpageloadResponse {
    public String contentType;
    public GlobalpageloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GlobalpageloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Globalpageload200ApplicationJson globalpageload200ApplicationJSONObject;
    public GlobalpageloadResponse withGlobalpageload200ApplicationJsonObject(Globalpageload200ApplicationJson globalpageload200ApplicationJSONObject) {
        this.globalpageload200ApplicationJSONObject = globalpageload200ApplicationJSONObject;
        return this;
    }
}