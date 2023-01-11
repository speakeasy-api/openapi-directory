package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimVirtualChassisReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}