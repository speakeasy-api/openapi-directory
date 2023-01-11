package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeAbuseReportsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeAbuseReportsInsertSecurityOption1 option1;
    public YoutubeAbuseReportsInsertSecurity withOption1(YoutubeAbuseReportsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeAbuseReportsInsertSecurityOption2 option2;
    public YoutubeAbuseReportsInsertSecurity withOption2(YoutubeAbuseReportsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}