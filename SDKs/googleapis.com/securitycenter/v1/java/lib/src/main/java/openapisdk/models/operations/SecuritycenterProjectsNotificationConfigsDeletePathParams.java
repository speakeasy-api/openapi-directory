package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterProjectsNotificationConfigsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecuritycenterProjectsNotificationConfigsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}