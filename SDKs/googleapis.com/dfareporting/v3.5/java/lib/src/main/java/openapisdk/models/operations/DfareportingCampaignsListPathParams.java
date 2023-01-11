package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCampaignsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}