package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarAclWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarAclWatchPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}