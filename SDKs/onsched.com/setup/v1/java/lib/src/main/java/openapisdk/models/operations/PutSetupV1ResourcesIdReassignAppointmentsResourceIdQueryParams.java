package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=calendarId")
    public String calendarId;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}