package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serviceGroupId")
    public String serviceGroupId;
    public PatchGroupPathParams withServiceGroupId(String serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
}