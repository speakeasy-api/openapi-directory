package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatsSeriesPeriodFieldsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fields")
    public String fields;
    public GetStatsSeriesPeriodFieldsPathParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=period")
    public GetStatsSeriesPeriodFieldsPeriodEnum period;
    public GetStatsSeriesPeriodFieldsPathParams withPeriod(GetStatsSeriesPeriodFieldsPeriodEnum period) {
        this.period = period;
        return this;
    }
}