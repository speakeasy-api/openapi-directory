package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamplesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public GetExamplesQueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetExamplesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetExamplesSourceEnum source;
    public GetExamplesQueryParams withSource(GetExamplesSourceEnum source) {
        this.source = source;
        return this;
    }
}