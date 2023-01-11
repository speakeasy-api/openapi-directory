package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingRegionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingRegionsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}