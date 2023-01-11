package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsDeleteSecurityOption1 option1;
    public DeploymentmanagerDeploymentsDeleteSecurity withOption1(DeploymentmanagerDeploymentsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsDeleteSecurityOption2 option2;
    public DeploymentmanagerDeploymentsDeleteSecurity withOption2(DeploymentmanagerDeploymentsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}