package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class FetchWorkersCumulativeStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public FetchWorkersCumulativeStatisticsQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Minutes")
    public Long minutes;
    public FetchWorkersCumulativeStatisticsQueryParams withMinutes(Long minutes) {
        this.minutes = minutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public FetchWorkersCumulativeStatisticsQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaskChannel")
    public String taskChannel;
    public FetchWorkersCumulativeStatisticsQueryParams withTaskChannel(String taskChannel) {
        this.taskChannel = taskChannel;
        return this;
    }
}