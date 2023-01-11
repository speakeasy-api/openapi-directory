package openapisdk.models.operations;



public class ListApplicationResponse {
    public Object applicationResponseCollection;
    public ListApplicationResponse withApplicationResponseCollection(Object applicationResponseCollection) {
        this.applicationResponseCollection = applicationResponseCollection;
        return this;
    }
    public String contentType;
    public ListApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listApplication400ApplicationJSONAny;
    public ListApplicationResponse withListApplication400ApplicationJsonAny(Object listApplication400ApplicationJSONAny) {
        this.listApplication400ApplicationJSONAny = listApplication400ApplicationJSONAny;
        return this;
    }
    public Object listApplication401ApplicationJSONAny;
    public ListApplicationResponse withListApplication401ApplicationJsonAny(Object listApplication401ApplicationJSONAny) {
        this.listApplication401ApplicationJSONAny = listApplication401ApplicationJSONAny;
        return this;
    }
    public Object listApplication405ApplicationJSONAny;
    public ListApplicationResponse withListApplication405ApplicationJsonAny(Object listApplication405ApplicationJSONAny) {
        this.listApplication405ApplicationJSONAny = listApplication405ApplicationJSONAny;
        return this;
    }
    public Object listApplication406ApplicationJSONAny;
    public ListApplicationResponse withListApplication406ApplicationJsonAny(Object listApplication406ApplicationJSONAny) {
        this.listApplication406ApplicationJSONAny = listApplication406ApplicationJSONAny;
        return this;
    }
}