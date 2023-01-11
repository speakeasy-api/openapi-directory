package openapisdk.models.operations;



public class GetTaskScanDataRequest {
    public GetTaskScanDataPathParams pathParams;
    public GetTaskScanDataRequest withPathParams(GetTaskScanDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTaskScanDataSecurity security;
    public GetTaskScanDataRequest withSecurity(GetTaskScanDataSecurity security) {
        this.security = security;
        return this;
    }
}