package openapisdk.models.operations;



public class DeleteDatasetRequest {
    public DeleteDatasetPathParams pathParams;
    public DeleteDatasetRequest withPathParams(DeleteDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDatasetSecurity security;
    public DeleteDatasetRequest withSecurity(DeleteDatasetSecurity security) {
        this.security = security;
        return this;
    }
}