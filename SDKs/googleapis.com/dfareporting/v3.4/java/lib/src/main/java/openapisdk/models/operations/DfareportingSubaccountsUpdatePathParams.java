package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSubaccountsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}