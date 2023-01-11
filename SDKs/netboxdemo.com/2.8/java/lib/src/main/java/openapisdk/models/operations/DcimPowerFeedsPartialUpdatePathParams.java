package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerFeedsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPowerFeedsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}