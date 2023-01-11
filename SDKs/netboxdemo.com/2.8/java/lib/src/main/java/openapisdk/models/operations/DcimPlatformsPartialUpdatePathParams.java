package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPlatformsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}