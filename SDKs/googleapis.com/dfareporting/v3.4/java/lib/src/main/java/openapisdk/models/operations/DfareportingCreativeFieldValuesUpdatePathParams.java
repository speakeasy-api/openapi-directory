package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeFieldId")
    public String creativeFieldId;
    public DfareportingCreativeFieldValuesUpdatePathParams withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldValuesUpdatePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}