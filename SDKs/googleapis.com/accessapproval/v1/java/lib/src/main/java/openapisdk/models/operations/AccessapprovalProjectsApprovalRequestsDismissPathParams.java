package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsDismissPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccessapprovalProjectsApprovalRequestsDismissPathParams withName(String name) {
        this.name = name;
        return this;
    }
}