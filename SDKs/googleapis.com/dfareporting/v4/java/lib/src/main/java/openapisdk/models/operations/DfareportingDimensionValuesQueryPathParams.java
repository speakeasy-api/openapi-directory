package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDimensionValuesQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingDimensionValuesQueryPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}