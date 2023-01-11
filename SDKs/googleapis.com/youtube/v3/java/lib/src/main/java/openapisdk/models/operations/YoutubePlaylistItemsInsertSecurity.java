package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistItemsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistItemsInsertSecurityOption1 option1;
    public YoutubePlaylistItemsInsertSecurity withOption1(YoutubePlaylistItemsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistItemsInsertSecurityOption2 option2;
    public YoutubePlaylistItemsInsertSecurity withOption2(YoutubePlaylistItemsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubePlaylistItemsInsertSecurityOption3 option3;
    public YoutubePlaylistItemsInsertSecurity withOption3(YoutubePlaylistItemsInsertSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}