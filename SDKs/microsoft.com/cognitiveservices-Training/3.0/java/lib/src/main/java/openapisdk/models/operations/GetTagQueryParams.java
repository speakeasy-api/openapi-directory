package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetTagQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}