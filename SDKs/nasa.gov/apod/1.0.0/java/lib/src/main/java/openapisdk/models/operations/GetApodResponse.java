package openapisdk.models.operations;



public class GetApodResponse {
    public String contentType;
    public GetApodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] getApod200ApplicationJSONAnies;
    public GetApodResponse withGetApod200ApplicationJsonAnies(Object[] getApod200ApplicationJSONAnies) {
        this.getApod200ApplicationJSONAnies = getApod200ApplicationJSONAnies;
        return this;
    }
}