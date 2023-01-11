package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRegionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRegionsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}