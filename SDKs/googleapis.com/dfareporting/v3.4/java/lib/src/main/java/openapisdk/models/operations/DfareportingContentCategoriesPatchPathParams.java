package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingContentCategoriesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingContentCategoriesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}