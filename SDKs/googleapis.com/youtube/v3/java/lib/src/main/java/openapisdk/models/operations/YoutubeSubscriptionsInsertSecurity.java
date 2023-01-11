package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeSubscriptionsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSubscriptionsInsertSecurityOption1 option1;
    public YoutubeSubscriptionsInsertSecurity withOption1(YoutubeSubscriptionsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSubscriptionsInsertSecurityOption2 option2;
    public YoutubeSubscriptionsInsertSecurity withOption2(YoutubeSubscriptionsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeSubscriptionsInsertSecurityOption3 option3;
    public YoutubeSubscriptionsInsertSecurity withOption3(YoutubeSubscriptionsInsertSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}