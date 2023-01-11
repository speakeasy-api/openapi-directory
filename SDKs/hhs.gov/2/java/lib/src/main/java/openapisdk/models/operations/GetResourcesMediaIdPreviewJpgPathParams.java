package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdPreviewJpgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesMediaIdPreviewJpgPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}