package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsUpdateSecurityOption1 option1;
    public YoutubePlaylistsUpdateSecurity withOption1(YoutubePlaylistsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsUpdateSecurityOption2 option2;
    public YoutubePlaylistsUpdateSecurity withOption2(YoutubePlaylistsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsUpdateSecurityOption3 option3;
    public YoutubePlaylistsUpdateSecurity withOption3(YoutubePlaylistsUpdateSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}