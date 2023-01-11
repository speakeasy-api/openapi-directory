package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSubaccountsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingSubaccountsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSubaccountsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}