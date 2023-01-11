package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}