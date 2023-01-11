package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeActivitiesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeActivitiesListSecurityOption1 option1;
    public YoutubeActivitiesListSecurity withOption1(YoutubeActivitiesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeActivitiesListSecurityOption2 option2;
    public YoutubeActivitiesListSecurity withOption2(YoutubeActivitiesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeActivitiesListSecurityOption3 option3;
    public YoutubeActivitiesListSecurity withOption3(YoutubeActivitiesListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}