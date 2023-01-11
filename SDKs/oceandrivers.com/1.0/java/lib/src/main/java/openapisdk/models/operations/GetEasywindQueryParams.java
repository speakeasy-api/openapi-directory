package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEasywindQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public String period;
    public GetEasywindQueryParams withPeriod(String period) {
        this.period = period;
        return this;
    }
}