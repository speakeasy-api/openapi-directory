package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsNotificationConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SecuritycenterProjectsNotificationConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}