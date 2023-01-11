package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimFrontPortsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}