package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeRequestDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=changeRequestId")
    public Long changeRequestId;
    public ChangeRequestDetailsPathParams withChangeRequestId(Long changeRequestId) {
        this.changeRequestId = changeRequestId;
        return this;
    }
}