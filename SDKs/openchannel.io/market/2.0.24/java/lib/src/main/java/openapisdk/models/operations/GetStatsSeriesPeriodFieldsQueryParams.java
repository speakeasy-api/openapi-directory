package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatsSeriesPeriodFieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public Long end;
    public GetStatsSeriesPeriodFieldsQueryParams withEnd(Long end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetStatsSeriesPeriodFieldsQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetStatsSeriesPeriodFieldsQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}