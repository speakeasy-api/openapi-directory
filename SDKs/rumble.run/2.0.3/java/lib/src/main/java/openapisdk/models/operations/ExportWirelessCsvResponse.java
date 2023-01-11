package openapisdk.models.operations;



public class ExportWirelessCsvResponse {
    public String contentType;
    public ExportWirelessCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportWirelessCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] exportWirelessCSV200TextCSVBinaryString;
    public ExportWirelessCsvResponse withExportWirelessCsv200TextCsvBinaryString(byte[] exportWirelessCSV200TextCSVBinaryString) {
        this.exportWirelessCSV200TextCSVBinaryString = exportWirelessCSV200TextCSVBinaryString;
        return this;
    }
}