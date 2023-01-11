package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetingTemplatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingTargetingTemplatesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}