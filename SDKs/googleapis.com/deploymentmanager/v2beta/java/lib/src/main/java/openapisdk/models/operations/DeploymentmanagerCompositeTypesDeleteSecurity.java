package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesDeleteSecurityOption1 option1;
    public DeploymentmanagerCompositeTypesDeleteSecurity withOption1(DeploymentmanagerCompositeTypesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesDeleteSecurityOption2 option2;
    public DeploymentmanagerCompositeTypesDeleteSecurity withOption2(DeploymentmanagerCompositeTypesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}