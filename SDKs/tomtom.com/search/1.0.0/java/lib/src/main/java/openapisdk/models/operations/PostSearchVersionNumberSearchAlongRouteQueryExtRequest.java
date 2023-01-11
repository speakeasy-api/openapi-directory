package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberSearchAlongRouteQueryExtRequest {
    public PostSearchVersionNumberSearchAlongRouteQueryExtPathParams pathParams;
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequest withPathParams(PostSearchVersionNumberSearchAlongRouteQueryExtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams queryParams;
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequest withQueryParams(PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody request;
    public PostSearchVersionNumberSearchAlongRouteQueryExtRequest withRequest(PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody request) {
        this.request = request;
        return this;
    }
}