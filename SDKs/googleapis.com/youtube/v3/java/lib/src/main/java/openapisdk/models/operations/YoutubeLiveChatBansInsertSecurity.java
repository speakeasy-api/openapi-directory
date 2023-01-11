package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatBansInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatBansInsertSecurityOption1 option1;
    public YoutubeLiveChatBansInsertSecurity withOption1(YoutubeLiveChatBansInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatBansInsertSecurityOption2 option2;
    public YoutubeLiveChatBansInsertSecurity withOption2(YoutubeLiveChatBansInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}