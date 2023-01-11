package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesLanguagesJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=max")
    public Integer max;
    public GetResourcesLanguagesJsonQueryParams withMax(Integer max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=offset")
    public Integer offset;
    public GetResourcesLanguagesJsonQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=sort")
    public String sort;
    public GetResourcesLanguagesJsonQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}