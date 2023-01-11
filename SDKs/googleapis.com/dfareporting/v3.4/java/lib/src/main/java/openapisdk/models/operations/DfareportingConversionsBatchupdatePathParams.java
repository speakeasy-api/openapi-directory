package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingConversionsBatchupdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingConversionsBatchupdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}