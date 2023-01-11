package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSizesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSizesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}