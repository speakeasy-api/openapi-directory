package openapisdk.models.operations;



public class GetEmployeeRequest {
    public GetEmployeePathParams pathParams;
    public GetEmployeeRequest withPathParams(GetEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmployeeSecurity security;
    public GetEmployeeRequest withSecurity(GetEmployeeSecurity security) {
        this.security = security;
        return this;
    }
}