package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeFieldId")
    public String creativeFieldId;
    public DfareportingCreativeFieldValuesPatchPathParams withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldValuesPatchPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}