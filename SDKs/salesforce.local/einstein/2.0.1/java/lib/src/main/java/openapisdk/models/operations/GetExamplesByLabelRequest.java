package openapisdk.models.operations;



public class GetExamplesByLabelRequest {
    public GetExamplesByLabelQueryParams queryParams;
    public GetExamplesByLabelRequest withQueryParams(GetExamplesByLabelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetExamplesByLabelSecurity security;
    public GetExamplesByLabelRequest withSecurity(GetExamplesByLabelSecurity security) {
        this.security = security;
        return this;
    }
}