package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CalendarsBlockIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel;
    public PutSetupV1CalendarsBlockIdRequests withCalendarBlockInputModel(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel) {
        this.calendarBlockInputModel = calendarBlockInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel1;
    public PutSetupV1CalendarsBlockIdRequests withCalendarBlockInputModel1(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel1) {
        this.calendarBlockInputModel1 = calendarBlockInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel2;
    public PutSetupV1CalendarsBlockIdRequests withCalendarBlockInputModel2(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel2) {
        this.calendarBlockInputModel2 = calendarBlockInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel3;
    public PutSetupV1CalendarsBlockIdRequests withCalendarBlockInputModel3(openapisdk.models.shared.CalendarBlockInputModel calendarBlockInputModel3) {
        this.calendarBlockInputModel3 = calendarBlockInputModel3;
        return this;
    }
}