package openapisdk.models.operations;



public class FindFormByFormNameResponse {
    public String contentType;
    public FindFormByFormNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FindFormByFormNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FindFormByFormName200ApplicationJson findFormByFormName200ApplicationJSONObject;
    public FindFormByFormNameResponse withFindFormByFormName200ApplicationJsonObject(FindFormByFormName200ApplicationJson findFormByFormName200ApplicationJSONObject) {
        this.findFormByFormName200ApplicationJSONObject = findFormByFormName200ApplicationJSONObject;
        return this;
    }
    public Object findFormByFormName401ApplicationJSONAny;
    public FindFormByFormNameResponse withFindFormByFormName401ApplicationJsonAny(Object findFormByFormName401ApplicationJSONAny) {
        this.findFormByFormName401ApplicationJSONAny = findFormByFormName401ApplicationJSONAny;
        return this;
    }
    public FindFormByFormName404ApplicationJson findFormByFormName404ApplicationJSONObject;
    public FindFormByFormNameResponse withFindFormByFormName404ApplicationJsonObject(FindFormByFormName404ApplicationJson findFormByFormName404ApplicationJSONObject) {
        this.findFormByFormName404ApplicationJSONObject = findFormByFormName404ApplicationJSONObject;
        return this;
    }
    public Object findFormByFormName429ApplicationJSONAny;
    public FindFormByFormNameResponse withFindFormByFormName429ApplicationJsonAny(Object findFormByFormName429ApplicationJSONAny) {
        this.findFormByFormName429ApplicationJSONAny = findFormByFormName429ApplicationJSONAny;
        return this;
    }
}