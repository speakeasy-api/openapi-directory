package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceGroupId")
    public String serviceGroupId;
    public DeleteGroupPathParams withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}