package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccessapprovalProjectsApprovalRequestsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}