package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1CalendarsIdBlockRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel;
    public PostSetupV1CalendarsIdBlockRequests withCalendarBlockInputModel(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel) {
        this.calendarBlockInputModel = calendarBlockInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel1;
    public PostSetupV1CalendarsIdBlockRequests withCalendarBlockInputModel1(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel1) {
        this.calendarBlockInputModel1 = calendarBlockInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel2;
    public PostSetupV1CalendarsIdBlockRequests withCalendarBlockInputModel2(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel2) {
        this.calendarBlockInputModel2 = calendarBlockInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel3;
    public PostSetupV1CalendarsIdBlockRequests withCalendarBlockInputModel3(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel3) {
        this.calendarBlockInputModel3 = calendarBlockInputModel3;
        return this;
    }
}