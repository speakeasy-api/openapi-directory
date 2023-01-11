package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountsPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}