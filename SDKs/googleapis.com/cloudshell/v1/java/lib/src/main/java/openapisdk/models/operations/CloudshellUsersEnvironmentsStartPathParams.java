package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsStartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudshellUsersEnvironmentsStartPathParams withName(String name) {
        this.name = name;
        return this;
    }
}