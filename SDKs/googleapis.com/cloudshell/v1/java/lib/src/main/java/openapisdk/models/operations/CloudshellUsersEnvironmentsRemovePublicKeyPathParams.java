package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsRemovePublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment")
    public String environment;
    public CloudshellUsersEnvironmentsRemovePublicKeyPathParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}