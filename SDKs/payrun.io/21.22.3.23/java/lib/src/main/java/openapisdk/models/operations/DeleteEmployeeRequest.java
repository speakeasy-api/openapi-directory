package openapisdk.models.operations;



public class DeleteEmployeeRequest {
    public DeleteEmployeePathParams pathParams;
    public DeleteEmployeeRequest withPathParams(DeleteEmployeePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEmployeeHeaders headers;
    public DeleteEmployeeRequest withHeaders(DeleteEmployeeHeaders headers) {
        this.headers = headers;
        return this;
    }
}