package openapisdk.models.operations;



public class GetWirelessLaNsResponse {
    public String contentType;
    public GetWirelessLaNsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWirelessLaNsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Wireless[] wirelesses;
    public GetWirelessLaNsResponse withWirelesses(openapisdk.models.shared.Wireless[] wirelesses) {
        this.wirelesses = wirelesses;
        return this;
    }
}