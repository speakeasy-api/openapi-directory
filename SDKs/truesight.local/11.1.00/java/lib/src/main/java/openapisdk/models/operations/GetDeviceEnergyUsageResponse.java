package openapisdk.models.operations;



public class GetDeviceEnergyUsageResponse {
    public byte[] body;
    public GetDeviceEnergyUsageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeviceEnergyUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceEnergyUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}