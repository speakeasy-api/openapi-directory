package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCampaignsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCampaignsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}