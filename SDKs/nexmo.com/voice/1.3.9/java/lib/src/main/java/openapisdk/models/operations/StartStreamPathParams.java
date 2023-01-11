package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartStreamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public StartStreamPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}