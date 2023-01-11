package openapisdk.models.operations;



public class UpdateDataExporterConfigResponse {
    public String contentType;
    public UpdateDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig dataExporterConfig;
    public UpdateDataExporterConfigResponse withDataExporterConfig(openapisdk.models.shared.DataExporterConfig dataExporterConfig) {
        this.dataExporterConfig = dataExporterConfig;
        return this;
    }
    public Long statusCode;
    public UpdateDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}