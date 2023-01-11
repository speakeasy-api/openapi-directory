package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingVideoFormatsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingVideoFormatsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}