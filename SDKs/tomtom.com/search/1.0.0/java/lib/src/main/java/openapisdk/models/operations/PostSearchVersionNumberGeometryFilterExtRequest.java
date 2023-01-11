package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberGeometryFilterExtRequest {
    public PostSearchVersionNumberGeometryFilterExtPathParams pathParams;
    public PostSearchVersionNumberGeometryFilterExtRequest withPathParams(PostSearchVersionNumberGeometryFilterExtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSearchVersionNumberGeometryFilterExtRequestBody request;
    public PostSearchVersionNumberGeometryFilterExtRequest withRequest(PostSearchVersionNumberGeometryFilterExtRequestBody request) {
        this.request = request;
        return this;
    }
}