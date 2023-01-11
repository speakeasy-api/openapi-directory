package openapisdk.models.operations;



public class FindFormsRequest {
    public FindFormsQueryParams queryParams;
    public FindFormsRequest withQueryParams(FindFormsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FindFormsSecurity security;
    public FindFormsRequest withSecurity(FindFormsSecurity security) {
        this.security = security;
        return this;
    }
}