package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=includes")
    public String[] includes;
    public ListQueryParams withIncludes(String[] includes) {
        this.includes = includes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=productGroupKeys")
    public String[] productGroupKeys;
    public ListQueryParams withProductGroupKeys(String[] productGroupKeys) {
        this.productGroupKeys = productGroupKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListSortEnum sort;
    public ListQueryParams withSort(ListSortEnum sort) {
        this.sort = sort;
        return this;
    }
}