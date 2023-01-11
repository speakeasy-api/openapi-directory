package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimVirtualChassisUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}