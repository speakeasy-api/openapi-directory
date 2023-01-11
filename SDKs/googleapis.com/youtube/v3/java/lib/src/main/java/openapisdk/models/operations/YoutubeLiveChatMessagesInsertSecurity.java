package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatMessagesInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatMessagesInsertSecurityOption1 option1;
    public YoutubeLiveChatMessagesInsertSecurity withOption1(YoutubeLiveChatMessagesInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatMessagesInsertSecurityOption2 option2;
    public YoutubeLiveChatMessagesInsertSecurity withOption2(YoutubeLiveChatMessagesInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}