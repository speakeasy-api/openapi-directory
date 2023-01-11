package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public String endDate;
    public UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public String startDate;
    public UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}