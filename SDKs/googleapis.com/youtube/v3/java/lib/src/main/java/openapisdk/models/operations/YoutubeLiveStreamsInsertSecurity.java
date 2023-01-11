package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveStreamsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsInsertSecurityOption1 option1;
    public YoutubeLiveStreamsInsertSecurity withOption1(YoutubeLiveStreamsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveStreamsInsertSecurityOption2 option2;
    public YoutubeLiveStreamsInsertSecurity withOption2(YoutubeLiveStreamsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}