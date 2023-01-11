package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerOutletsTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPowerOutletsTracePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}