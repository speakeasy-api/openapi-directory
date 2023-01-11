package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSubaccountsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}