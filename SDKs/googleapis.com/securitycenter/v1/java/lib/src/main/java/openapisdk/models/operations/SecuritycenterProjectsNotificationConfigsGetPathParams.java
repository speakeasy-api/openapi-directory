package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsNotificationConfigsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsNotificationConfigsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}