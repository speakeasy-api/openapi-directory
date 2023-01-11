package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlatformsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PlatformsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}