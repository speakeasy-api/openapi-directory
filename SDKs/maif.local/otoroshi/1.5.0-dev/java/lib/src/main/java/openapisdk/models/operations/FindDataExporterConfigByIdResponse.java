package openapisdk.models.operations;



public class FindDataExporterConfigByIdResponse {
    public String contentType;
    public FindDataExporterConfigByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig dataExporterConfig;
    public FindDataExporterConfigByIdResponse withDataExporterConfig(openapisdk.models.shared.DataExporterConfig dataExporterConfig) {
        this.dataExporterConfig = dataExporterConfig;
        return this;
    }
    public Long statusCode;
    public FindDataExporterConfigByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}