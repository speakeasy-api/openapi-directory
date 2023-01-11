package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetHolidaySchemeByEffectiveDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EffectiveDate")
    public LocalDate effectiveDate;
    public GetHolidaySchemeByEffectiveDatePathParams withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetHolidaySchemeByEffectiveDatePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public GetHolidaySchemeByEffectiveDatePathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
}