package openapisdk.models.operations;



public class PatchDataExporterConfigResponse {
    public String contentType;
    public PatchDataExporterConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig dataExporterConfig;
    public PatchDataExporterConfigResponse withDataExporterConfig(openapisdk.models.shared.DataExporterConfig dataExporterConfig) {
        this.dataExporterConfig = dataExporterConfig;
        return this;
    }
    public Long statusCode;
    public PatchDataExporterConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}