package openapisdk.models.operations;



public class PutEmployeeTagRequest {
    public PutEmployeeTagPathParams pathParams;
    public PutEmployeeTagRequest withPathParams(PutEmployeeTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutEmployeeTagHeaders headers;
    public PutEmployeeTagRequest withHeaders(PutEmployeeTagHeaders headers) {
        this.headers = headers;
        return this;
    }
}