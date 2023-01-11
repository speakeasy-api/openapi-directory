package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamples1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public String count;
    public GetExamples1QueryParams withCount(String count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetExamples1QueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public GetExamples1SourceEnum source;
    public GetExamples1QueryParams withSource(GetExamples1SourceEnum source) {
        this.source = source;
        return this;
    }
}