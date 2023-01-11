package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeclineChangeRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeRequestId")
    public Long changeRequestId;
    public DeclineChangeRequestPathParams withChangeRequestId(Long changeRequestId) {
        this.changeRequestId = changeRequestId;
        return this;
    }
}