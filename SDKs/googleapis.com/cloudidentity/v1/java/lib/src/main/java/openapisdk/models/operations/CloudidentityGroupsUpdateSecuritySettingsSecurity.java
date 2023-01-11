package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityGroupsUpdateSecuritySettingsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 option1;
    public CloudidentityGroupsUpdateSecuritySettingsSecurity withOption1(CloudidentityGroupsUpdateSecuritySettingsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 option2;
    public CloudidentityGroupsUpdateSecuritySettingsSecurity withOption2(CloudidentityGroupsUpdateSecuritySettingsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}