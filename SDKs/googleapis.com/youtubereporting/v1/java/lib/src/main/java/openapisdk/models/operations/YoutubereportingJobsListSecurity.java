package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsListSecurityOption1 option1;
    public YoutubereportingJobsListSecurity withOption1(YoutubereportingJobsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsListSecurityOption2 option2;
    public YoutubereportingJobsListSecurity withOption2(YoutubereportingJobsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}