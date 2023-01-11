package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsDeleteAccessApprovalSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccessapprovalProjectsDeleteAccessApprovalSettingsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}