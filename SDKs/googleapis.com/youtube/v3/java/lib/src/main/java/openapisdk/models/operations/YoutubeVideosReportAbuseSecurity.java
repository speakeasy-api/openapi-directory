package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeVideosReportAbuseSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeVideosReportAbuseSecurityOption1 option1;
    public YoutubeVideosReportAbuseSecurity withOption1(YoutubeVideosReportAbuseSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeVideosReportAbuseSecurityOption2 option2;
    public YoutubeVideosReportAbuseSecurity withOption2(YoutubeVideosReportAbuseSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeVideosReportAbuseSecurityOption3 option3;
    public YoutubeVideosReportAbuseSecurity withOption3(YoutubeVideosReportAbuseSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}