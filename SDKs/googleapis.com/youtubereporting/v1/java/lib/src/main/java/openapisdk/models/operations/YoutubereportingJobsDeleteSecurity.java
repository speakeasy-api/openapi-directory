package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsDeleteSecurityOption1 option1;
    public YoutubereportingJobsDeleteSecurity withOption1(YoutubereportingJobsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsDeleteSecurityOption2 option2;
    public YoutubereportingJobsDeleteSecurity withOption2(YoutubereportingJobsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}