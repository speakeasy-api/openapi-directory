package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingProjectsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingProjectsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}