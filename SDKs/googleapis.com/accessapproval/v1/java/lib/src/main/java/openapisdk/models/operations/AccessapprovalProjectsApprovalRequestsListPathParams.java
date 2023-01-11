package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccessapprovalProjectsApprovalRequestsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}