package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTalkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public StopTalkPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}