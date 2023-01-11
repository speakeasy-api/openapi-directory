package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostVolumesIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}