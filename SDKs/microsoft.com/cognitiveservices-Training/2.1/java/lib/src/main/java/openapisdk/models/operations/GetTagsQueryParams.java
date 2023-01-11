package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetTagsQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}