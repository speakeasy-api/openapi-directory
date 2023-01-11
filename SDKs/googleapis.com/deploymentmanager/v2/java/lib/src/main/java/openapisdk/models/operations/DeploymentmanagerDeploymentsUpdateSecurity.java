package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsUpdateSecurityOption1 option1;
    public DeploymentmanagerDeploymentsUpdateSecurity withOption1(DeploymentmanagerDeploymentsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsUpdateSecurityOption2 option2;
    public DeploymentmanagerDeploymentsUpdateSecurity withOption2(DeploymentmanagerDeploymentsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}