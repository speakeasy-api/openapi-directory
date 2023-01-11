package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetImagesIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}