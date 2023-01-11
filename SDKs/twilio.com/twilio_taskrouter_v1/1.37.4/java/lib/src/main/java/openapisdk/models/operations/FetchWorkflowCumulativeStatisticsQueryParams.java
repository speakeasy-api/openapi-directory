package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkflowCumulativeStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public FetchWorkflowCumulativeStatisticsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Minutes")
    public Long minutes;
    public FetchWorkflowCumulativeStatisticsQueryParams withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SplitByWaitTime")
    public String splitByWaitTime;
    public FetchWorkflowCumulativeStatisticsQueryParams withSplitByWaitTime(String splitByWaitTime) {
        this.splitByWaitTime = splitByWaitTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public FetchWorkflowCumulativeStatisticsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskChannel")
    public String taskChannel;
    public FetchWorkflowCumulativeStatisticsQueryParams withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
}