package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesSourcesJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=max")
    public Integer max;
    public GetResourcesSourcesJsonQueryParams withMax(Integer max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=offset")
    public Integer offset;
    public GetResourcesSourcesJsonQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public String sort;
    public GetResourcesSourcesJsonQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}