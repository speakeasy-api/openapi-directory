package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamplesByLabel1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public GetExamplesByLabel1QueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=labelId")
    public String labelId;
    public GetExamplesByLabel1QueryParams withLabelId(String labelId) {
        this.labelId = labelId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetExamplesByLabel1QueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}