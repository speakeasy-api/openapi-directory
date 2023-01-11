package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsCancelPreviewSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsCancelPreviewSecurityOption1 option1;
    public DeploymentmanagerDeploymentsCancelPreviewSecurity withOption1(DeploymentmanagerDeploymentsCancelPreviewSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerDeploymentsCancelPreviewSecurityOption2 option2;
    public DeploymentmanagerDeploymentsCancelPreviewSecurity withOption2(DeploymentmanagerDeploymentsCancelPreviewSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}