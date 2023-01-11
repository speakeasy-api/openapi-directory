package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRearPortsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}