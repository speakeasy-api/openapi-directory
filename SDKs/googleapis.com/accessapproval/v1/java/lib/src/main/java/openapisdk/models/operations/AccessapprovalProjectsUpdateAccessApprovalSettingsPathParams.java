package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}