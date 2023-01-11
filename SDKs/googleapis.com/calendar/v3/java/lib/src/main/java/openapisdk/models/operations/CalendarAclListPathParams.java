package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarAclListPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}