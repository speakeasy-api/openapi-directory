package openapisdk.models.operations;



public class ListTechniquesDirectivesResponse {
    public String contentType;
    public ListTechniquesDirectivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTechniquesDirectivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListTechniquesDirectives200ApplicationJson listTechniquesDirectives200ApplicationJSONObject;
    public ListTechniquesDirectivesResponse withListTechniquesDirectives200ApplicationJsonObject(ListTechniquesDirectives200ApplicationJson listTechniquesDirectives200ApplicationJSONObject) {
        this.listTechniquesDirectives200ApplicationJSONObject = listTechniquesDirectives200ApplicationJSONObject;
        return this;
    }
}