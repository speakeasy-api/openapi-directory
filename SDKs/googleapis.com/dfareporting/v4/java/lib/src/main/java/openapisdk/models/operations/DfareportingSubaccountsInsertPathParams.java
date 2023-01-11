package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSubaccountsInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}