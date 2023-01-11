package openapisdk.models.operations;



public class ExportServicesCsvResponse {
    public String contentType;
    public ExportServicesCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportServicesCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportServicesCSV200TextCSVBinaryString;
    public ExportServicesCsvResponse withExportServicesCsv200TextCsvBinaryString(byte[] exportServicesCSV200TextCSVBinaryString) {
        this.exportServicesCSV200TextCSVBinaryString = exportServicesCSV200TextCSVBinaryString;
        return this;
    }
}