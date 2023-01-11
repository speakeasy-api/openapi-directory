package openapisdk.models.operations;



public class ListDatasets1Request {
    public ListDatasets1QueryParams queryParams;
    public ListDatasets1Request withQueryParams(ListDatasets1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasets1Security security;
    public ListDatasets1Request withSecurity(ListDatasets1Security security) {
        this.security = security;
        return this;
    }
}