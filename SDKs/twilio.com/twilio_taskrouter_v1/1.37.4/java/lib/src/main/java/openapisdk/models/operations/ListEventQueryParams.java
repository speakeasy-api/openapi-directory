package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public ListEventQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventType")
    public String eventType;
    public ListEventQueryParams withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Minutes")
    public Long minutes;
    public ListEventQueryParams withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEventQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservationSid")
    public String reservationSid;
    public ListEventQueryParams withReservationSid(String reservationSid) {
        this.reservationSid = reservationSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Sid")
    public String sid;
    public ListEventQueryParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public ListEventQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskChannel")
    public String taskChannel;
    public ListEventQueryParams withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskQueueSid")
    public String taskQueueSid;
    public ListEventQueryParams withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskSid")
    public String taskSid;
    public ListEventQueryParams withTaskSid(String taskSid) {
        this.taskSid = taskSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkerSid")
    public String workerSid;
    public ListEventQueryParams withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkflowSid")
    public String workflowSid;
    public ListEventQueryParams withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
}