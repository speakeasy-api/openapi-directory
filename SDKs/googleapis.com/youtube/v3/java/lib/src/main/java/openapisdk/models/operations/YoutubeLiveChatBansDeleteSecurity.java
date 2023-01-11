package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatBansDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatBansDeleteSecurityOption1 option1;
    public YoutubeLiveChatBansDeleteSecurity withOption1(YoutubeLiveChatBansDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatBansDeleteSecurityOption2 option2;
    public YoutubeLiveChatBansDeleteSecurity withOption2(YoutubeLiveChatBansDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}