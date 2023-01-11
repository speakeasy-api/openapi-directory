package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uuid")
    public String uuid;
    public GetCallPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}