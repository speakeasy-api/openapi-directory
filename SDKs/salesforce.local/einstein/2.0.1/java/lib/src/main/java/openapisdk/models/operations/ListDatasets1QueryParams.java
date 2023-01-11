package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasets1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public ListDatasets1QueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=global")
    public Boolean global;
    public ListDatasets1QueryParams withGlobal(Boolean global) {
        this.global = global;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ListDatasets1QueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}