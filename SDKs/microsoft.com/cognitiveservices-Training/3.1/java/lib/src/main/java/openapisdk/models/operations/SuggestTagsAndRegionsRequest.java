package openapisdk.models.operations;



public class SuggestTagsAndRegionsRequest {
    public SuggestTagsAndRegionsPathParams pathParams;
    public SuggestTagsAndRegionsRequest withPathParams(SuggestTagsAndRegionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SuggestTagsAndRegionsQueryParams queryParams;
    public SuggestTagsAndRegionsRequest withQueryParams(SuggestTagsAndRegionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SuggestTagsAndRegionsHeaders headers;
    public SuggestTagsAndRegionsRequest withHeaders(SuggestTagsAndRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}