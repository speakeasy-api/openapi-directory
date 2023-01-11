package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudshellUsersEnvironmentsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}