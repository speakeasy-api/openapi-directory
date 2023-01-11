package openapisdk.models.operations;



public class ListAddressResponse {
    public String contentType;
    public ListAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAddressListAddressResponse listAddressResponse;
    public ListAddressResponse withListAddressResponse(ListAddressListAddressResponse listAddressResponse) {
        this.listAddressResponse = listAddressResponse;
        return this;
    }
    public Long statusCode;
    public ListAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}