package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingMobileAppsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingMobileAppsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}