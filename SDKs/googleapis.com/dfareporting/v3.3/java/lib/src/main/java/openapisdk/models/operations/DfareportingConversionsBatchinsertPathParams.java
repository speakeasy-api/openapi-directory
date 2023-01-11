package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingConversionsBatchinsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingConversionsBatchinsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}