package openapisdk.models.operations;



public class ListInflectedFormsResponse {
    public String contentType;
    public ListInflectedFormsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListInflectedFormsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListInflectedForms200ApplicationJson[] listInflectedForms200ApplicationJSONObjects;
    public ListInflectedFormsResponse withListInflectedForms200ApplicationJsonObjects(ListInflectedForms200ApplicationJson[] listInflectedForms200ApplicationJSONObjects) {
        this.listInflectedForms200ApplicationJSONObjects = listInflectedForms200ApplicationJSONObjects;
        return this;
    }
}