package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerCompositeTypesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesPatchSecurityOption1 option1;
    public DeploymentmanagerCompositeTypesPatchSecurity withOption1(DeploymentmanagerCompositeTypesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DeploymentmanagerCompositeTypesPatchSecurityOption2 option2;
    public DeploymentmanagerCompositeTypesPatchSecurity withOption2(DeploymentmanagerCompositeTypesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}