package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllProductsV2QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public Boolean sort;
    public GetAllProductsV2QueryParams withSort(Boolean sort) {
        this.sort = sort;
        return this;
    }
}