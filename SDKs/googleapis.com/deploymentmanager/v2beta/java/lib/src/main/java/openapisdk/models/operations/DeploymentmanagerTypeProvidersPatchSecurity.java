package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerTypeProvidersPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerTypeProvidersPatchSecurityOption1 option1;
    public DeploymentmanagerTypeProvidersPatchSecurity withOption1(DeploymentmanagerTypeProvidersPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerTypeProvidersPatchSecurityOption2 option2;
    public DeploymentmanagerTypeProvidersPatchSecurity withOption2(DeploymentmanagerTypeProvidersPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}