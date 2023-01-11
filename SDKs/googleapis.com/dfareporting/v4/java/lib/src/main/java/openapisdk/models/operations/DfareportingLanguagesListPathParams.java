package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingLanguagesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingLanguagesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}