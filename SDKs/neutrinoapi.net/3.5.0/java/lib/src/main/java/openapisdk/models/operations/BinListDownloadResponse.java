package openapisdk.models.operations;



public class BinListDownloadResponse {
    public openapisdk.models.shared.ApiError apiError;
    public BinListDownloadResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public byte[] binListDownload200ApplicationJSONBinaryString;
    public BinListDownloadResponse withBinListDownload200ApplicationJsonBinaryString(byte[] binListDownload200ApplicationJSONBinaryString) {
        this.binListDownload200ApplicationJSONBinaryString = binListDownload200ApplicationJSONBinaryString;
        return this;
    }
    public String contentType;
    public BinListDownloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BinListDownloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}