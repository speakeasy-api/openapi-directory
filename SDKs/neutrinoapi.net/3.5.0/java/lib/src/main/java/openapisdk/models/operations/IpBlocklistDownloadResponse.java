package openapisdk.models.operations;



public class IpBlocklistDownloadResponse {
    public openapisdk.models.shared.ApiError apiError;
    public IpBlocklistDownloadResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public IpBlocklistDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] ipBlocklistDownload200ApplicationJSONBinaryString;
    public IpBlocklistDownloadResponse withIpBlocklistDownload200ApplicationJsonBinaryString(byte[] ipBlocklistDownload200ApplicationJSONBinaryString) {
        this.ipBlocklistDownload200ApplicationJSONBinaryString = ipBlocklistDownload200ApplicationJSONBinaryString;
        return this;
    }
    public Long statusCode;
    public IpBlocklistDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}