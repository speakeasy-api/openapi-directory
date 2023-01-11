package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingFilesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingFilesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}