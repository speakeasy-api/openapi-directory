package openapisdk.models.operations;



public class FindAllDataExportersResponse {
    public String contentType;
    public FindAllDataExportersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExporterConfig[] dataExporterConfigs;
    public FindAllDataExportersResponse withDataExporterConfigs(openapisdk.models.shared.DataExporterConfig[] dataExporterConfigs) {
        this.dataExporterConfigs = dataExporterConfigs;
        return this;
    }
    public Long statusCode;
    public FindAllDataExportersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}