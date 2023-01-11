package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserResponsivityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public GetUserResponsivityPeriodEnum period;
    public GetUserResponsivityQueryParams withPeriod(GetUserResponsivityPeriodEnum period) {
        this.period = period;
        return this;
    }
}