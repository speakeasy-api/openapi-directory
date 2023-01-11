package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceGroupId")
    public String serviceGroupId;
    public UpdateGroupPathParams withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}