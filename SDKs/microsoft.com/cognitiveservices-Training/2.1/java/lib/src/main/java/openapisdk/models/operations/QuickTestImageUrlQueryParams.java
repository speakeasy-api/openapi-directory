package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageUrlQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=iterationId")
    public String iterationId;
    public QuickTestImageUrlQueryParams withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
}