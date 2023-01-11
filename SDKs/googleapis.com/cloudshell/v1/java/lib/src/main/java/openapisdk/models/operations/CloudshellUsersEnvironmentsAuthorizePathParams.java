package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsAuthorizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudshellUsersEnvironmentsAuthorizePathParams withName(String name) {
        this.name = name;
        return this;
    }
}