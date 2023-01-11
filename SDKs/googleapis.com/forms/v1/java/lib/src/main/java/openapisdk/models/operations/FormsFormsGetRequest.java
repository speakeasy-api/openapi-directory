package openapisdk.models.operations;



public class FormsFormsGetRequest {
    public FormsFormsGetPathParams pathParams;
    public FormsFormsGetRequest withPathParams(FormsFormsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FormsFormsGetQueryParams queryParams;
    public FormsFormsGetRequest withQueryParams(FormsFormsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FormsFormsGetSecurity security;
    public FormsFormsGetRequest withSecurity(FormsFormsGetSecurity security) {
        this.security = security;
        return this;
    }
}