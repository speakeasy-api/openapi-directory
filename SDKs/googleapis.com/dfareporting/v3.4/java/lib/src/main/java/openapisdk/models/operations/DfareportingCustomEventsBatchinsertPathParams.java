package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCustomEventsBatchinsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCustomEventsBatchinsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}