package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public ListDatasetsQueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=global")
    public Boolean global;
    public ListDatasetsQueryParams withGlobal(Boolean global) {
        this.global = global;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ListDatasetsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}