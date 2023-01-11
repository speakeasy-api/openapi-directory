package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCreativeFieldValuesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeFieldId")
    public String creativeFieldId;
    public DfareportingCreativeFieldValuesDeletePathParams withCreativeFieldId(String creativeFieldId) {
        this.creativeFieldId = creativeFieldId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingCreativeFieldValuesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCreativeFieldValuesDeletePathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}