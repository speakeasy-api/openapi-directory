package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter[parent]")
    public String filterParent;
    public GetCategoriesQueryParams withFilterParent(String filterParent) {
        this.filterParent = filterParent;
        return this;
    }
}