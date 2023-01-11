package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeChannelsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeChannelsUpdateSecurityOption1 option1;
    public YoutubeChannelsUpdateSecurity withOption1(YoutubeChannelsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeChannelsUpdateSecurityOption2 option2;
    public YoutubeChannelsUpdateSecurity withOption2(YoutubeChannelsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeChannelsUpdateSecurityOption3 option3;
    public YoutubeChannelsUpdateSecurity withOption3(YoutubeChannelsUpdateSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}