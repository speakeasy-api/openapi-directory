package openapisdk.models.operations;



public class ExportAssetsCsvResponse {
    public String contentType;
    public ExportAssetsCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAssetsCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportAssetsCSV200TextCSVBinaryString;
    public ExportAssetsCsvResponse withExportAssetsCsv200TextCsvBinaryString(byte[] exportAssetsCSV200TextCSVBinaryString) {
        this.exportAssetsCSV200TextCSVBinaryString = exportAssetsCSV200TextCSVBinaryString;
        return this;
    }
}