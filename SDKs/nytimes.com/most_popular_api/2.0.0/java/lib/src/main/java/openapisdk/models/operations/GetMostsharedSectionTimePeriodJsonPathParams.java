package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMostsharedSectionTimePeriodJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=section")
    public openapisdk.models.shared.SectionEnum section;
    public GetMostsharedSectionTimePeriodJsonPathParams withSection(openapisdk.models.shared.SectionEnum section) {
        this.section = section;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=time-period")
    public openapisdk.models.shared.TimePeriodEnum timePeriod;
    public GetMostsharedSectionTimePeriodJsonPathParams withTimePeriod(openapisdk.models.shared.TimePeriodEnum timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
}