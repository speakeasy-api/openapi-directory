package openapisdk.models.operations;



public class GetOpenApiSpecResponse {
    public String contentType;
    public GetOpenApiSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOpenApiSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getOpenApiSpec200ApplicationJSONString;
    public GetOpenApiSpecResponse withGetOpenApiSpec200ApplicationJsonString(String getOpenApiSpec200ApplicationJSONString) {
        this.getOpenApiSpec200ApplicationJSONString = getOpenApiSpec200ApplicationJSONString;
        return this;
    }
}