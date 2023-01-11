package openapisdk.models.operations;



public class FullExportResponse {
    public String contentType;
    public FullExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportExport importExport;
    public FullExportResponse withImportExport(openapisdk.models.shared.ImportExport importExport) {
        this.importExport = importExport;
        return this;
    }
    public Long statusCode;
    public FullExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}