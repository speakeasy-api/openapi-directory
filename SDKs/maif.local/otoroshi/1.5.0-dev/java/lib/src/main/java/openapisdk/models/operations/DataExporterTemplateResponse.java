package openapisdk.models.operations;



public class DataExporterTemplateResponse {
    public String contentType;
    public DataExporterTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig dataExporterConfig;
    public DataExporterTemplateResponse withDataExporterConfig(openapisdk.models.shared.DataExporterConfig dataExporterConfig) {
        this.dataExporterConfig = dataExporterConfig;
        return this;
    }
    public Long statusCode;
    public DataExporterTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}