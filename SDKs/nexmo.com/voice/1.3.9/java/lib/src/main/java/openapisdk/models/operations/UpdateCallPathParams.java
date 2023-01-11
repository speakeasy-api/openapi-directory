package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public UpdateCallPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}