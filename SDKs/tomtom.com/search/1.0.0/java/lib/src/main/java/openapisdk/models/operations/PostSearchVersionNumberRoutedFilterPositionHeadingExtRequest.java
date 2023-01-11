package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest {
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams pathParams;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest withPathParams(PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams queryParams;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest withQueryParams(PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody request;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest withRequest(PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody request) {
        this.request = request;
        return this;
    }
}