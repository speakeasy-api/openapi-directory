package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingUserRolesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingUserRolesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}