package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAdsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAdsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}