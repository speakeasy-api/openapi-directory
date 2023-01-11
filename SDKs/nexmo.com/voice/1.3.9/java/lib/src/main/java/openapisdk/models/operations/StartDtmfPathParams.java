package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDtmfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public StartDtmfPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}