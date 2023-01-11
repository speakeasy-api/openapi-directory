package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlacementsGeneratetagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlacementsGeneratetagsPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}