package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsApprovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccessapprovalProjectsApprovalRequestsApprovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}