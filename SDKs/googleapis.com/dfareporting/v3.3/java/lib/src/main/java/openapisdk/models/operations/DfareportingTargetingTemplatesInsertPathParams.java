package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingTargetingTemplatesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingTargetingTemplatesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}