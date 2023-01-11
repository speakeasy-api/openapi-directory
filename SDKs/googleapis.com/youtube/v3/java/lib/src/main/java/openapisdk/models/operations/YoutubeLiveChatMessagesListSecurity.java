package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatMessagesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatMessagesListSecurityOption1 option1;
    public YoutubeLiveChatMessagesListSecurity withOption1(YoutubeLiveChatMessagesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatMessagesListSecurityOption2 option2;
    public YoutubeLiveChatMessagesListSecurity withOption2(YoutubeLiveChatMessagesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatMessagesListSecurityOption3 option3;
    public YoutubeLiveChatMessagesListSecurity withOption3(YoutubeLiveChatMessagesListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}