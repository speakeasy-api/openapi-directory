package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveStreamsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsUpdateSecurityOption1 option1;
    public YoutubeLiveStreamsUpdateSecurity withOption1(YoutubeLiveStreamsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsUpdateSecurityOption2 option2;
    public YoutubeLiveStreamsUpdateSecurity withOption2(YoutubeLiveStreamsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}