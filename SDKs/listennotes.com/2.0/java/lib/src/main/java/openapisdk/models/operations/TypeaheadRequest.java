package openapisdk.models.operations;



public class TypeaheadRequest {
    public TypeaheadQueryParams queryParams;
    public TypeaheadRequest withQueryParams(TypeaheadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TypeaheadHeaders headers;
    public TypeaheadRequest withHeaders(TypeaheadHeaders headers) {
        this.headers = headers;
        return this;
    }
}