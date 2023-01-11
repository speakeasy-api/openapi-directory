package openapisdk.models.operations;



public class StorageProjectsServiceAccountGetRequest {
    public StorageProjectsServiceAccountGetPathParams pathParams;
    public StorageProjectsServiceAccountGetRequest withPathParams(StorageProjectsServiceAccountGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageProjectsServiceAccountGetQueryParams queryParams;
    public StorageProjectsServiceAccountGetRequest withQueryParams(StorageProjectsServiceAccountGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public StorageProjectsServiceAccountGetSecurity security;
    public StorageProjectsServiceAccountGetRequest withSecurity(StorageProjectsServiceAccountGetSecurity security) {
        this.security = security;
        return this;
    }
}