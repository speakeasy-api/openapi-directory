package openapisdk.models.operations;



public class ListHypernymsResponse {
    public String contentType;
    public ListHypernymsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListHypernymsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Double[][] listHypernyms200ApplicationJSONArrays;
    public ListHypernymsResponse withListHypernyms200ApplicationJsonArrays(Double[][] listHypernyms200ApplicationJSONArrays) {
        this.listHypernyms200ApplicationJSONArrays = listHypernyms200ApplicationJSONArrays;
        return this;
    }
}