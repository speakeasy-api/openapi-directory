package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortsTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPowerPortsTracePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}