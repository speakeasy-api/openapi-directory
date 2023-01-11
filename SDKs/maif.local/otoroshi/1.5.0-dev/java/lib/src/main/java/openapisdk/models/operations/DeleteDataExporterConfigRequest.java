package openapisdk.models.operations;



public class DeleteDataExporterConfigRequest {
    public DeleteDataExporterConfigPathParams pathParams;
    public DeleteDataExporterConfigRequest withPathParams(DeleteDataExporterConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDataExporterConfigSecurity security;
    public DeleteDataExporterConfigRequest withSecurity(DeleteDataExporterConfigSecurity security) {
        this.security = security;
        return this;
    }
}