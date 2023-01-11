package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveChatModeratorsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatModeratorsDeleteSecurityOption1 option1;
    public YoutubeLiveChatModeratorsDeleteSecurity withOption1(YoutubeLiveChatModeratorsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveChatModeratorsDeleteSecurityOption2 option2;
    public YoutubeLiveChatModeratorsDeleteSecurity withOption2(YoutubeLiveChatModeratorsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}