package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveStreamsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsDeleteSecurityOption1 option1;
    public YoutubeLiveStreamsDeleteSecurity withOption1(YoutubeLiveStreamsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsDeleteSecurityOption2 option2;
    public YoutubeLiveStreamsDeleteSecurity withOption2(YoutubeLiveStreamsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}