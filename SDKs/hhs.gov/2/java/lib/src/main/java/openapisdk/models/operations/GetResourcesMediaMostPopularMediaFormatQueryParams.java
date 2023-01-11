package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaMostPopularMediaFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=max")
    public Integer max;
    public GetResourcesMediaMostPopularMediaFormatQueryParams withMax(Integer max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=offset")
    public Integer offset;
    public GetResourcesMediaMostPopularMediaFormatQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}