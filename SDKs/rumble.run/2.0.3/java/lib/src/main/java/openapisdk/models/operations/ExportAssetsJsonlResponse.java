package openapisdk.models.operations;



public class ExportAssetsJsonlResponse {
    public String contentType;
    public ExportAssetsJsonlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAssetsJsonlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportAssetsJSONL200ApplicationJSONBinaryString;
    public ExportAssetsJsonlResponse withExportAssetsJsonl200ApplicationJsonBinaryString(byte[] exportAssetsJSONL200ApplicationJSONBinaryString) {
        this.exportAssetsJSONL200ApplicationJSONBinaryString = exportAssetsJSONL200ApplicationJSONBinaryString;
        return this;
    }
}