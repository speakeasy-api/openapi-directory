package openapisdk.models.operations;



public class ListTechniqueVersionDirectivesResponse {
    public String contentType;
    public ListTechniqueVersionDirectivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTechniqueVersionDirectivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListTechniqueVersionDirectives200ApplicationJson listTechniqueVersionDirectives200ApplicationJSONObject;
    public ListTechniqueVersionDirectivesResponse withListTechniqueVersionDirectives200ApplicationJsonObject(ListTechniqueVersionDirectives200ApplicationJson listTechniqueVersionDirectives200ApplicationJSONObject) {
        this.listTechniqueVersionDirectives200ApplicationJSONObject = listTechniqueVersionDirectives200ApplicationJSONObject;
        return this;
    }
}