package openapisdk.models.operations;



public class ExportSitesCsvResponse {
    public String contentType;
    public ExportSitesCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportSitesCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportSitesCSV200TextCSVBinaryString;
    public ExportSitesCsvResponse withExportSitesCsv200TextCsvBinaryString(byte[] exportSitesCSV200TextCSVBinaryString) {
        this.exportSitesCSV200TextCSVBinaryString = exportSitesCSV200TextCSVBinaryString;
        return this;
    }
}