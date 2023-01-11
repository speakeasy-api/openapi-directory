package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeSuperChatEventsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSuperChatEventsListSecurityOption1 option1;
    public YoutubeSuperChatEventsListSecurity withOption1(YoutubeSuperChatEventsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSuperChatEventsListSecurityOption2 option2;
    public YoutubeSuperChatEventsListSecurity withOption2(YoutubeSuperChatEventsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSuperChatEventsListSecurityOption3 option3;
    public YoutubeSuperChatEventsListSecurity withOption3(YoutubeSuperChatEventsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}