package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPlatformsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPlatformsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}