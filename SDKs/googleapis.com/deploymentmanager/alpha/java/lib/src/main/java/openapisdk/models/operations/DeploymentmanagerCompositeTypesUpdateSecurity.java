package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesUpdateSecurityOption1 option1;
    public DeploymentmanagerCompositeTypesUpdateSecurity withOption1(DeploymentmanagerCompositeTypesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesUpdateSecurityOption2 option2;
    public DeploymentmanagerCompositeTypesUpdateSecurity withOption2(DeploymentmanagerCompositeTypesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}