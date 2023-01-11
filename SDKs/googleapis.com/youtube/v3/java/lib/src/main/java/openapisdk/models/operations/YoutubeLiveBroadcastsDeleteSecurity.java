package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveBroadcastsDeleteSecurityOption1 option1;
    public YoutubeLiveBroadcastsDeleteSecurity withOption1(YoutubeLiveBroadcastsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveBroadcastsDeleteSecurityOption2 option2;
    public YoutubeLiveBroadcastsDeleteSecurity withOption2(YoutubeLiveBroadcastsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}