package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingSitesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingSitesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}