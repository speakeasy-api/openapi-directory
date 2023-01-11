package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPanelsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPowerPanelsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}