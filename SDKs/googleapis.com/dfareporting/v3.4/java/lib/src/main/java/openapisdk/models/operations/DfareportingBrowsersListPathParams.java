package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingBrowsersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingBrowsersListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}