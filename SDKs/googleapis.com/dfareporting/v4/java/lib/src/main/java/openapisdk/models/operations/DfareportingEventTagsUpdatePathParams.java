package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingEventTagsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingEventTagsUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}