package openapisdk.models.operations;



public class ListOriginationUrlResponse {
    public String contentType;
    public ListOriginationUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListOriginationUrlListOriginationUrlResponse listOriginationUrlResponse;
    public ListOriginationUrlResponse withListOriginationUrlResponse(ListOriginationUrlListOriginationUrlResponse listOriginationUrlResponse) {
        this.listOriginationUrlResponse = listOriginationUrlResponse;
        return this;
    }
    public Long statusCode;
    public ListOriginationUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}