package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeLiveBroadcastsTransitionSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveBroadcastsTransitionSecurityOption1 option1;
    public YoutubeLiveBroadcastsTransitionSecurity withOption1(YoutubeLiveBroadcastsTransitionSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeLiveBroadcastsTransitionSecurityOption2 option2;
    public YoutubeLiveBroadcastsTransitionSecurity withOption2(YoutubeLiveBroadcastsTransitionSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}