package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVolumesIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetVolumesIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}