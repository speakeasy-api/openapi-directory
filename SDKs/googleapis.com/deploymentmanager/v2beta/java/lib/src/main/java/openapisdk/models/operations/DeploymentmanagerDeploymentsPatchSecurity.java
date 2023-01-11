package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsPatchSecurityOption1 option1;
    public DeploymentmanagerDeploymentsPatchSecurity withOption1(DeploymentmanagerDeploymentsPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsPatchSecurityOption2 option2;
    public DeploymentmanagerDeploymentsPatchSecurity withOption2(DeploymentmanagerDeploymentsPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}