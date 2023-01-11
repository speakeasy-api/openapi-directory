package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingPlatformTypesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingPlatformTypesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}