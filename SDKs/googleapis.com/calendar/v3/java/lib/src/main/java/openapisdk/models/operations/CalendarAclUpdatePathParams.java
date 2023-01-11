package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarAclUpdatePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public CalendarAclUpdatePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}