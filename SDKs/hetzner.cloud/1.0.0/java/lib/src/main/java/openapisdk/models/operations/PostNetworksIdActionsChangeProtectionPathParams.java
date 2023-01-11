package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostNetworksIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}