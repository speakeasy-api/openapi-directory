package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementsInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}