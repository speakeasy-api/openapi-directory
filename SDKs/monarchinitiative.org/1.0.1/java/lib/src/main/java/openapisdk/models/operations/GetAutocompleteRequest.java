package openapisdk.models.operations;



public class GetAutocompleteRequest {
    public GetAutocompletePathParams pathParams;
    public GetAutocompleteRequest withPathParams(GetAutocompletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAutocompleteQueryParams queryParams;
    public GetAutocompleteRequest withQueryParams(GetAutocompleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}