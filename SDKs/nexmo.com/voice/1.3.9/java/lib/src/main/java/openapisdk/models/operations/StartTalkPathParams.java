package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTalkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public StartTalkPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}