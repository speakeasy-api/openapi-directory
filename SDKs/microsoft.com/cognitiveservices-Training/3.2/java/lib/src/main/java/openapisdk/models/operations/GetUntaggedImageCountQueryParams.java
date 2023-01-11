package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntaggedImageCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public GetUntaggedImageCountQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}