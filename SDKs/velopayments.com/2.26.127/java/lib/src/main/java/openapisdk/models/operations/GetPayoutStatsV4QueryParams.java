package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayoutStatsV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public GetPayoutStatsV4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}