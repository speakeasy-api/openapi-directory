package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCampaignsPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}