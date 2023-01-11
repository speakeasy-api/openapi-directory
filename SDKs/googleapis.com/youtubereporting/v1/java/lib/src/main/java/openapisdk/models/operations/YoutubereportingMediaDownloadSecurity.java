package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubereportingMediaDownloadSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingMediaDownloadSecurityOption1 option1;
    public YoutubereportingMediaDownloadSecurity withOption1(YoutubereportingMediaDownloadSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubereportingMediaDownloadSecurityOption2 option2;
    public YoutubereportingMediaDownloadSecurity withOption2(YoutubereportingMediaDownloadSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}