package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRateByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rate_id")
    public String rateId;
    public GetRateByIdPathParams withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
}