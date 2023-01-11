package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListCallQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public ListCallQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime<")
    public OffsetDateTime endTimeLessThan;
    public ListCallQueryParams withEndTimeLessThan(OffsetDateTime endTimeLessThan) {
        this.endTimeLessThan = endTimeLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime>")
    public OffsetDateTime endTimeGreaterThan;
    public ListCallQueryParams withEndTimeGreaterThan(OffsetDateTime endTimeGreaterThan) {
        this.endTimeGreaterThan = endTimeGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=From")
    public String from;
    public ListCallQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCallQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ParentCallSid")
    public String parentCallSid;
    public ListCallQueryParams withParentCallSid(String parentCallSid) {
        this.parentCallSid = parentCallSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public ListCallQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime<")
    public OffsetDateTime startTimeLessThan;
    public ListCallQueryParams withStartTimeLessThan(OffsetDateTime startTimeLessThan) {
        this.startTimeLessThan = startTimeLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime>")
    public OffsetDateTime startTimeGreaterThan;
    public ListCallQueryParams withStartTimeGreaterThan(OffsetDateTime startTimeGreaterThan) {
        this.startTimeGreaterThan = startTimeGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.CallEnumStatusEnum status;
    public ListCallQueryParams withStatus(openapisdk.models.shared.CallEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=To")
    public String to;
    public ListCallQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}