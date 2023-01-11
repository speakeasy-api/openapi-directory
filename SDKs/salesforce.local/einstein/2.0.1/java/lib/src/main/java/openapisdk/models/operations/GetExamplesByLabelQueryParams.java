package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamplesByLabelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public GetExamplesByLabelQueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labelId")
    public String labelId;
    public GetExamplesByLabelQueryParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetExamplesByLabelQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}