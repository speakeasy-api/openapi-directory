package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingContentCategoriesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}