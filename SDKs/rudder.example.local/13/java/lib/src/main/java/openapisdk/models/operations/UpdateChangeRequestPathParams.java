package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChangeRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeRequestId")
    public Long changeRequestId;
    public UpdateChangeRequestPathParams withChangeRequestId(Long changeRequestId) {
        this.changeRequestId = changeRequestId;
        return this;
    }
}