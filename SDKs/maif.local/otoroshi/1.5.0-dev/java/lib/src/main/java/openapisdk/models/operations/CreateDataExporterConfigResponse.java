package openapisdk.models.operations;



public class CreateDataExporterConfigResponse {
    public String contentType;
    public CreateDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig dataExporterConfig;
    public CreateDataExporterConfigResponse withDataExporterConfig(openapisdk.models.shared.DataExporterConfig dataExporterConfig) {
        this.dataExporterConfig = dataExporterConfig;
        return this;
    }
    public Long statusCode;
    public CreateDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}