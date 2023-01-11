package openapisdk.models.operations;



public class ListSimIpAddressResponse {
    public String contentType;
    public ListSimIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSimIpAddressListSimIpAddressResponse listSimIpAddressResponse;
    public ListSimIpAddressResponse withListSimIpAddressResponse(ListSimIpAddressListSimIpAddressResponse listSimIpAddressResponse) {
        this.listSimIpAddressResponse = listSimIpAddressResponse;
        return this;
    }
    public Long statusCode;
    public ListSimIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}