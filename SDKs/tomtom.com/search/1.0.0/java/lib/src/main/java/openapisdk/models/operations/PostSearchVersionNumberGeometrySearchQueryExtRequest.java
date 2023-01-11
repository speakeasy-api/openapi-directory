package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberGeometrySearchQueryExtRequest {
    public PostSearchVersionNumberGeometrySearchQueryExtPathParams pathParams;
    public PostSearchVersionNumberGeometrySearchQueryExtRequest withPathParams(PostSearchVersionNumberGeometrySearchQueryExtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostSearchVersionNumberGeometrySearchQueryExtQueryParams queryParams;
    public PostSearchVersionNumberGeometrySearchQueryExtRequest withQueryParams(PostSearchVersionNumberGeometrySearchQueryExtQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSearchVersionNumberGeometrySearchQueryExtRequestBody request;
    public PostSearchVersionNumberGeometrySearchQueryExtRequest withRequest(PostSearchVersionNumberGeometrySearchQueryExtRequestBody request) {
        this.request = request;
        return this;
    }
}