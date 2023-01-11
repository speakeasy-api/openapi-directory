package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCitiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCitiesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}