package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWeatherDisplayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public String period;
    public GetWeatherDisplayQueryParams withPeriod(String period) {
        this.period = period;
        return this;
    }
}