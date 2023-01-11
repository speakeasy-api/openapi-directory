package openapisdk.models.operations;



public class ListTechniquesResponse {
    public String contentType;
    public ListTechniquesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTechniquesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListTechniques200ApplicationJson listTechniques200ApplicationJSONObject;
    public ListTechniquesResponse withListTechniques200ApplicationJsonObject(ListTechniques200ApplicationJson listTechniques200ApplicationJSONObject) {
        this.listTechniques200ApplicationJSONObject = listTechniques200ApplicationJSONObject;
        return this;
    }
}