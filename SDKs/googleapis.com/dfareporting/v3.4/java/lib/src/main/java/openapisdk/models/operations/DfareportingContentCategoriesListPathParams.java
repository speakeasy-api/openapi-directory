package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingContentCategoriesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}