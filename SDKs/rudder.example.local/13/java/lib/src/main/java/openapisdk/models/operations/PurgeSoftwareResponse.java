package openapisdk.models.operations;



public class PurgeSoftwareResponse {
    public String contentType;
    public PurgeSoftwareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PurgeSoftwareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PurgeSoftware200ApplicationJson purgeSoftware200ApplicationJSONObject;
    public PurgeSoftwareResponse withPurgeSoftware200ApplicationJsonObject(PurgeSoftware200ApplicationJson purgeSoftware200ApplicationJSONObject) {
        this.purgeSoftware200ApplicationJSONObject = purgeSoftware200ApplicationJSONObject;
        return this;
    }
}