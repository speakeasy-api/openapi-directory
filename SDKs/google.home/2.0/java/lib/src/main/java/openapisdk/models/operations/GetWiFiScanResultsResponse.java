package openapisdk.models.operations;



public class GetWiFiScanResultsResponse {
    public String contentType;
    public GetWiFiScanResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example114[] example114s;
    public GetWiFiScanResultsResponse withExample114s(openapisdk.models.shared.Example114[] example114s) {
        this.example114s = example114s;
        return this;
    }
    public Long statusCode;
    public GetWiFiScanResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}