package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagTopAskersPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=period")
    public GetTagsTagTopAskersPeriodPeriodEnum period;
    public GetTagsTagTopAskersPeriodPathParams withPeriod(GetTagsTagTopAskersPeriodPeriodEnum period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag")
    public String tag;
    public GetTagsTagTopAskersPeriodPathParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}