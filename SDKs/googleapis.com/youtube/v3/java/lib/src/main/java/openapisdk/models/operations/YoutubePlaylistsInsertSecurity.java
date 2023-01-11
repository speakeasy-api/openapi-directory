package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsInsertSecurityOption1 option1;
    public YoutubePlaylistsInsertSecurity withOption1(YoutubePlaylistsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsInsertSecurityOption2 option2;
    public YoutubePlaylistsInsertSecurity withOption2(YoutubePlaylistsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistsInsertSecurityOption3 option3;
    public YoutubePlaylistsInsertSecurity withOption3(YoutubePlaylistsInsertSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}