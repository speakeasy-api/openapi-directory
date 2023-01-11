package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeFieldId")
    public String creativeFieldId;
    public DfareportingCreativeFieldValuesListPathParams withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldValuesListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}