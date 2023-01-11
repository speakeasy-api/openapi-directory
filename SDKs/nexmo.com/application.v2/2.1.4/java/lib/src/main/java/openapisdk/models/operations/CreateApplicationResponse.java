package openapisdk.models.operations;



public class CreateApplicationResponse {
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateApplication201ApplicationJson createApplication201ApplicationJSONObject;
    public CreateApplicationResponse withCreateApplication201ApplicationJsonObject(CreateApplication201ApplicationJson createApplication201ApplicationJSONObject) {
        this.createApplication201ApplicationJSONObject = createApplication201ApplicationJSONObject;
        return this;
    }
    public Object createApplication400ApplicationJSONAny;
    public CreateApplicationResponse withCreateApplication400ApplicationJsonAny(Object createApplication400ApplicationJSONAny) {
        this.createApplication400ApplicationJSONAny = createApplication400ApplicationJSONAny;
        return this;
    }
    public Object createApplication401ApplicationJSONAny;
    public CreateApplicationResponse withCreateApplication401ApplicationJsonAny(Object createApplication401ApplicationJSONAny) {
        this.createApplication401ApplicationJSONAny = createApplication401ApplicationJSONAny;
        return this;
    }
    public Object createApplication405ApplicationJSONAny;
    public CreateApplicationResponse withCreateApplication405ApplicationJsonAny(Object createApplication405ApplicationJSONAny) {
        this.createApplication405ApplicationJSONAny = createApplication405ApplicationJSONAny;
        return this;
    }
    public Object createApplication406ApplicationJSONAny;
    public CreateApplicationResponse withCreateApplication406ApplicationJsonAny(Object createApplication406ApplicationJSONAny) {
        this.createApplication406ApplicationJSONAny = createApplication406ApplicationJSONAny;
        return this;
    }
    public Object createApplication415ApplicationJSONAny;
    public CreateApplicationResponse withCreateApplication415ApplicationJsonAny(Object createApplication415ApplicationJSONAny) {
        this.createApplication415ApplicationJSONAny = createApplication415ApplicationJSONAny;
        return this;
    }
}