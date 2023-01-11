package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingContentCategoriesUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}