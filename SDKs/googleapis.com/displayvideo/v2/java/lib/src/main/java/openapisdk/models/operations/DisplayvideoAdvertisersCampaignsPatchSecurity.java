package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCampaignsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoAdvertisersCampaignsPatchSecurityOption1 option1;
    public DisplayvideoAdvertisersCampaignsPatchSecurity withOption1(DisplayvideoAdvertisersCampaignsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoAdvertisersCampaignsPatchSecurityOption2 option2;
    public DisplayvideoAdvertisersCampaignsPatchSecurity withOption2(DisplayvideoAdvertisersCampaignsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}