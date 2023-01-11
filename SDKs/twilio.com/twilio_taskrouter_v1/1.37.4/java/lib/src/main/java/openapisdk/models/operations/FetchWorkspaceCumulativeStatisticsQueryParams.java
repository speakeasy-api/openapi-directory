package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkspaceCumulativeStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public FetchWorkspaceCumulativeStatisticsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Minutes")
    public Long minutes;
    public FetchWorkspaceCumulativeStatisticsQueryParams withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SplitByWaitTime")
    public String splitByWaitTime;
    public FetchWorkspaceCumulativeStatisticsQueryParams withSplitByWaitTime(String splitByWaitTime) {
        this.splitByWaitTime = splitByWaitTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public FetchWorkspaceCumulativeStatisticsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskChannel")
    public String taskChannel;
    public FetchWorkspaceCumulativeStatisticsQueryParams withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
}