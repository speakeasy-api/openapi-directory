package openapisdk.models.operations;



public class GetTimestagsResponse {
    public String contentType;
    public GetTimestagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTimestagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[][] getTimestags200ApplicationJSONArrays;
    public GetTimestagsResponse withGetTimestags200ApplicationJsonArrays(String[][] getTimestags200ApplicationJSONArrays) {
        this.getTimestags200ApplicationJSONArrays = getTimestags200ApplicationJSONArrays;
        return this;
    }
}