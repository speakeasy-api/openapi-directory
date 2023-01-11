package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromHolidaySchemeRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EffectiveDate")
    public LocalDate effectiveDate;
    public GetTagFromHolidaySchemeRevisionPathParams withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromHolidaySchemeRevisionPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public GetTagFromHolidaySchemeRevisionPathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromHolidaySchemeRevisionPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}