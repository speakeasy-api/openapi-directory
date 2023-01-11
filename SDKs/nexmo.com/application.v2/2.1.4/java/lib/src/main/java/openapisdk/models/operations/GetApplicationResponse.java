package openapisdk.models.operations;



public class GetApplicationResponse {
    public Object applicationResponse;
    public GetApplicationResponse withApplicationResponse(Object applicationResponse) {
        this.applicationResponse = applicationResponse;
        return this;
    }
    public String contentType;
    public GetApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getApplication401ApplicationJSONAny;
    public GetApplicationResponse withGetApplication401ApplicationJsonAny(Object getApplication401ApplicationJSONAny) {
        this.getApplication401ApplicationJSONAny = getApplication401ApplicationJSONAny;
        return this;
    }
    public Object getApplication404ApplicationJSONAny;
    public GetApplicationResponse withGetApplication404ApplicationJsonAny(Object getApplication404ApplicationJSONAny) {
        this.getApplication404ApplicationJSONAny = getApplication404ApplicationJSONAny;
        return this;
    }
    public Object getApplication405ApplicationJSONAny;
    public GetApplicationResponse withGetApplication405ApplicationJsonAny(Object getApplication405ApplicationJSONAny) {
        this.getApplication405ApplicationJSONAny = getApplication405ApplicationJSONAny;
        return this;
    }
    public Object getApplication406ApplicationJSONAny;
    public GetApplicationResponse withGetApplication406ApplicationJsonAny(Object getApplication406ApplicationJSONAny) {
        this.getApplication406ApplicationJSONAny = getApplication406ApplicationJSONAny;
        return this;
    }
}