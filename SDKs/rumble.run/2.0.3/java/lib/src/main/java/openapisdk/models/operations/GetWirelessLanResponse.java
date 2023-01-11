package openapisdk.models.operations;



public class GetWirelessLanResponse {
    public String contentType;
    public GetWirelessLanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWirelessLanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Wireless wireless;
    public GetWirelessLanResponse withWireless(openapisdk.models.shared.Wireless wireless) {
        this.wireless = wireless;
        return this;
    }
}