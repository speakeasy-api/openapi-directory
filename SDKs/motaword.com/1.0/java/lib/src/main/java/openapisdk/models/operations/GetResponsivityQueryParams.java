package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResponsivityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public GetResponsivityPeriodEnum period;
    public GetResponsivityQueryParams withPeriod(GetResponsivityPeriodEnum period) {
        this.period = period;
        return this;
    }
}