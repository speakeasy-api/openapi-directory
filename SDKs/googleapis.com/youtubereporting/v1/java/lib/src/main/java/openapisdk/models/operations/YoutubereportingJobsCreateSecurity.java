package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingJobsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsCreateSecurityOption1 option1;
    public YoutubereportingJobsCreateSecurity withOption1(YoutubereportingJobsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingJobsCreateSecurityOption2 option2;
    public YoutubereportingJobsCreateSecurity withOption2(YoutubereportingJobsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}