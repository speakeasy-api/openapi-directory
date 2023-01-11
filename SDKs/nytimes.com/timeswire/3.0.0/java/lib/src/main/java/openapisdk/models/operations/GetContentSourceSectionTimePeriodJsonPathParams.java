package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentSourceSectionTimePeriodJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section")
    public String section;
    public GetContentSourceSectionTimePeriodJsonPathParams withSection(String section) {
        this.section = section;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public GetContentSourceSectionTimePeriodJsonSourceEnum source;
    public GetContentSourceSectionTimePeriodJsonPathParams withSource(GetContentSourceSectionTimePeriodJsonSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=time-period")
    public Long timePeriod;
    public GetContentSourceSectionTimePeriodJsonPathParams withTimePeriod(Long timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
}