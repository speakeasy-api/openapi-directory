package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingMobileCarriersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingMobileCarriersListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}