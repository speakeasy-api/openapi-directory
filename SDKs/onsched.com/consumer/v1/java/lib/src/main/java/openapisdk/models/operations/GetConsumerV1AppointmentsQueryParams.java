package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AppointmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bookedBy")
    public String bookedBy;
    public GetConsumerV1AppointmentsQueryParams withBookedBy(String bookedBy) {
        this.bookedBy = bookedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=calendarId")
    public String calendarId;
    public GetConsumerV1AppointmentsQueryParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customerId")
    public String customerId;
    public GetConsumerV1AppointmentsQueryParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetConsumerV1AppointmentsQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public OffsetDateTime endDate;
    public GetConsumerV1AppointmentsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastname")
    public String lastname;
    public GetConsumerV1AppointmentsQueryParams withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetConsumerV1AppointmentsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetConsumerV1AppointmentsQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetConsumerV1AppointmentsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone")
    public String phone;
    public GetConsumerV1AppointmentsQueryParams withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceId")
    public String resourceId;
    public GetConsumerV1AppointmentsQueryParams withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceAllocationId")
    public String serviceAllocationId;
    public GetConsumerV1AppointmentsQueryParams withServiceAllocationId(String serviceAllocationId) {
        this.serviceAllocationId = serviceAllocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetConsumerV1AppointmentsQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public OffsetDateTime startDate;
    public GetConsumerV1AppointmentsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetConsumerV1AppointmentsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}