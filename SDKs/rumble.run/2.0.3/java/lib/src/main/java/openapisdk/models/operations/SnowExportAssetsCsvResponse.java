package openapisdk.models.operations;



public class SnowExportAssetsCsvResponse {
    public String contentType;
    public SnowExportAssetsCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SnowExportAssetsCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] snowExportAssetsCSV200TextCSVBinaryString;
    public SnowExportAssetsCsvResponse withSnowExportAssetsCsv200TextCsvBinaryString(byte[] snowExportAssetsCSV200TextCSVBinaryString) {
        this.snowExportAssetsCSV200TextCSVBinaryString = snowExportAssetsCSV200TextCSVBinaryString;
        return this;
    }
}