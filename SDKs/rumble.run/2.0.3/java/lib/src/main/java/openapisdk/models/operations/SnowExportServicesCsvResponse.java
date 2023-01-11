package openapisdk.models.operations;



public class SnowExportServicesCsvResponse {
    public String contentType;
    public SnowExportServicesCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SnowExportServicesCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] snowExportServicesCSV200TextCSVBinaryString;
    public SnowExportServicesCsvResponse withSnowExportServicesCsv200TextCsvBinaryString(byte[] snowExportServicesCSV200TextCSVBinaryString) {
        this.snowExportServicesCSV200TextCSVBinaryString = snowExportServicesCSV200TextCSVBinaryString;
        return this;
    }
}