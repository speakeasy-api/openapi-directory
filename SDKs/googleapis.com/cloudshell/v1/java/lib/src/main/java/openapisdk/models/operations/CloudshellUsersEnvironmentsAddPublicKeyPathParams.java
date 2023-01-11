package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudshellUsersEnvironmentsAddPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment")
    public String environment;
    public CloudshellUsersEnvironmentsAddPublicKeyPathParams withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}