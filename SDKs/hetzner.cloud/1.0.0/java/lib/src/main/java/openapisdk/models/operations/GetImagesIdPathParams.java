package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetImagesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}