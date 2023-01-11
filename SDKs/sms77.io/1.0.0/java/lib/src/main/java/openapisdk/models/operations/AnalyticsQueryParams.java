package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public AnalyticsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_by")
    public AnalyticsGroupByEnum groupBy;
    public AnalyticsQueryParams withGroupBy(AnalyticsGroupByEnum groupBy) {
        this.groupBy = groupBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label")
    public String label;
    public AnalyticsQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public AnalyticsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subaccounts")
    public String subaccounts;
    public AnalyticsQueryParams withSubaccounts(String subaccounts) {
        this.subaccounts = subaccounts;
        return this;
    }
}