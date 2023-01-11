package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimFrontPortsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}