package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLabelFromRatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rate_id")
    public String rateId;
    public CreateLabelFromRatePathParams withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
}