package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VirtualizationClusterGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public VirtualizationClusterGroupsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}