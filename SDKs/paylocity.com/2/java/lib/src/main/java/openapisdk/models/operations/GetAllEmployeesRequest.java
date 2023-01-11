package openapisdk.models.operations;



public class GetAllEmployeesRequest {
    public GetAllEmployeesPathParams pathParams;
    public GetAllEmployeesRequest withPathParams(GetAllEmployeesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAllEmployeesQueryParams queryParams;
    public GetAllEmployeesRequest withQueryParams(GetAllEmployeesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllEmployeesSecurity security;
    public GetAllEmployeesRequest withSecurity(GetAllEmployeesSecurity security) {
        this.security = security;
        return this;
    }
}