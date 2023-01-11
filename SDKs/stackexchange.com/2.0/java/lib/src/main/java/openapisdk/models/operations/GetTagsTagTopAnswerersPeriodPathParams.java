package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsTagTopAnswerersPeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=period")
    public GetTagsTagTopAnswerersPeriodPeriodEnum period;
    public GetTagsTagTopAnswerersPeriodPathParams withPeriod(GetTagsTagTopAnswerersPeriodPeriodEnum period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag")
    public String tag;
    public GetTagsTagTopAnswerersPeriodPathParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}