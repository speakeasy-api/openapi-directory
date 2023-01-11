package openapisdk.models.operations;



public class GetPairedDevicesResponse {
    public String contentType;
    public GetPairedDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example111[] example111s;
    public GetPairedDevicesResponse withExample111s(openapisdk.models.shared.Example111[] example111s) {
        this.example111s = example111s;
        return this;
    }
    public Long statusCode;
    public GetPairedDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}