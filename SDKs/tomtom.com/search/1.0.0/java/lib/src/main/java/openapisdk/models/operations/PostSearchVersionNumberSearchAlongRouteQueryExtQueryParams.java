package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDetourTime")
    public Long maxDetourTime;
    public PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams withMaxDetourTime(Long maxDetourTime) {
        this.maxDetourTime = maxDetourTime;
        return this;
    }
}