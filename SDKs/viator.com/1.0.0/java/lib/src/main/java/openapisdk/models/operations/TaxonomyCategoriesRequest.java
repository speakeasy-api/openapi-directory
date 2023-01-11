package openapisdk.models.operations;



public class TaxonomyCategoriesRequest {
    public TaxonomyCategoriesQueryParams queryParams;
    public TaxonomyCategoriesRequest withQueryParams(TaxonomyCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaxonomyCategoriesHeaders headers;
    public TaxonomyCategoriesRequest withHeaders(TaxonomyCategoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
}