package openapisdk.models.operations;



public class ListNetworkAccessProfileResponse {
    public String contentType;
    public ListNetworkAccessProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListNetworkAccessProfileListNetworkAccessProfileResponse listNetworkAccessProfileResponse;
    public ListNetworkAccessProfileResponse withListNetworkAccessProfileResponse(ListNetworkAccessProfileListNetworkAccessProfileResponse listNetworkAccessProfileResponse) {
        this.listNetworkAccessProfileResponse = listNetworkAccessProfileResponse;
        return this;
    }
    public Long statusCode;
    public ListNetworkAccessProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}