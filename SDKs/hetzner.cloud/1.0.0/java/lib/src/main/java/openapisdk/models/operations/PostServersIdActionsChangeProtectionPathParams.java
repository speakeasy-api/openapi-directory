package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}