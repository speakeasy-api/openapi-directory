package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDirectorySitesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDirectorySitesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}