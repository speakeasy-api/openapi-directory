package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeFieldId")
    public String creativeFieldId;
    public DfareportingCreativeFieldValuesGetPathParams withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingCreativeFieldValuesGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldValuesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}