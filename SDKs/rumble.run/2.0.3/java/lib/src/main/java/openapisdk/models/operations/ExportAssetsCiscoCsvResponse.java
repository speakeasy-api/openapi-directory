package openapisdk.models.operations;



public class ExportAssetsCiscoCsvResponse {
    public String contentType;
    public ExportAssetsCiscoCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportAssetsCiscoCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportAssetsCiscoCSV200TextCSVBinaryString;
    public ExportAssetsCiscoCsvResponse withExportAssetsCiscoCsv200TextCsvBinaryString(byte[] exportAssetsCiscoCSV200TextCSVBinaryString) {
        this.exportAssetsCiscoCSV200TextCSVBinaryString = exportAssetsCiscoCSV200TextCSVBinaryString;
        return this;
    }
}