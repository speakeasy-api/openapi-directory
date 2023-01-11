package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingReportsCompatibleFieldsQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingReportsCompatibleFieldsQueryPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}