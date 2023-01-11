package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public StopStreamPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}