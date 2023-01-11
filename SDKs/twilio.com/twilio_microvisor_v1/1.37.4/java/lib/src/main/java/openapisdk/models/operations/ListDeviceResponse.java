package openapisdk.models.operations;



public class ListDeviceResponse {
    public String contentType;
    public ListDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListDeviceListDeviceResponse listDeviceResponse;
    public ListDeviceResponse withListDeviceResponse(ListDeviceListDeviceResponse listDeviceResponse) {
        this.listDeviceResponse = listDeviceResponse;
        return this;
    }
    public Long statusCode;
    public ListDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}