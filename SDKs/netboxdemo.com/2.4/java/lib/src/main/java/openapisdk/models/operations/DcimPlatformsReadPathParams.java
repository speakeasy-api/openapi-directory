package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPlatformsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}