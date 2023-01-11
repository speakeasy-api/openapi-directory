package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1AppointmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bookedBy")
    public String bookedBy;
    public GetSetupV1AppointmentsQueryParams withBookedBy(String bookedBy) {
        this.bookedBy = bookedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=calendarId")
    public String calendarId;
    public GetSetupV1AppointmentsQueryParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customerId")
    public String customerId;
    public GetSetupV1AppointmentsQueryParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetSetupV1AppointmentsQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetSetupV1AppointmentsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastname")
    public String lastname;
    public GetSetupV1AppointmentsQueryParams withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1AppointmentsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetSetupV1AppointmentsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1AppointmentsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetSetupV1AppointmentsQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceAllocationId")
    public String serviceAllocationId;
    public GetSetupV1AppointmentsQueryParams withServiceAllocationId(String serviceAllocationId) {
        this.serviceAllocationId = serviceAllocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetSetupV1AppointmentsQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetSetupV1AppointmentsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetSetupV1AppointmentsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}