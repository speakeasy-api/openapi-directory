package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworksIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetNetworksIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}