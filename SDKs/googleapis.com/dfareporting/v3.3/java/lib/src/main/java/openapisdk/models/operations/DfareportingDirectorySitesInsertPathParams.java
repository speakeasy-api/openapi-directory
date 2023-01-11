package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDirectorySitesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDirectorySitesInsertPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}