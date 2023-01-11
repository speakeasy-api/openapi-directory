package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImagesIdActionsChangeProtectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostImagesIdActionsChangeProtectionPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}