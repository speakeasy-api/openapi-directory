package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimVirtualChassisPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}