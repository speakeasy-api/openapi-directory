package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutStatsV1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetPayoutStatsV1QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}