package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarAclInsertPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}