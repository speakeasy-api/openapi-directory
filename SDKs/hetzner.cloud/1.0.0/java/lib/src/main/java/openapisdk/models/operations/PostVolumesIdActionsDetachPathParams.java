package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVolumesIdActionsDetachPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostVolumesIdActionsDetachPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}