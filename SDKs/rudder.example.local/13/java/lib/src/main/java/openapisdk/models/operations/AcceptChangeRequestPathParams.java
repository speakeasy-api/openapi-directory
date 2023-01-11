package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptChangeRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeRequestId")
    public Long changeRequestId;
    public AcceptChangeRequestPathParams withChangeRequestId(Long changeRequestId) {
        this.changeRequestId = changeRequestId;
        return this;
    }
}