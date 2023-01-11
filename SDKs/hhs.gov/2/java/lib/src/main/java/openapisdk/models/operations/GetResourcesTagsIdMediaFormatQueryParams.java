package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsIdMediaFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=max")
    public Integer max;
    public GetResourcesTagsIdMediaFormatQueryParams withMax(Integer max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=offset")
    public Integer offset;
    public GetResourcesTagsIdMediaFormatQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public String sort;
    public GetResourcesTagsIdMediaFormatQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}