package openapisdk.models.operations;



public class FindFormsResponse {
    public String contentType;
    public FindFormsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindFormsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FindForms200ApplicationJson findForms200ApplicationJSONObject;
    public FindFormsResponse withFindForms200ApplicationJsonObject(FindForms200ApplicationJson findForms200ApplicationJSONObject) {
        this.findForms200ApplicationJSONObject = findForms200ApplicationJSONObject;
        return this;
    }
    public Object findForms401ApplicationJSONAny;
    public FindFormsResponse withFindForms401ApplicationJsonAny(Object findForms401ApplicationJSONAny) {
        this.findForms401ApplicationJSONAny = findForms401ApplicationJSONAny;
        return this;
    }
    public Object findForms429ApplicationJSONAny;
    public FindFormsResponse withFindForms429ApplicationJsonAny(Object findForms429ApplicationJSONAny) {
        this.findForms429ApplicationJSONAny = findForms429ApplicationJSONAny;
        return this;
    }
}