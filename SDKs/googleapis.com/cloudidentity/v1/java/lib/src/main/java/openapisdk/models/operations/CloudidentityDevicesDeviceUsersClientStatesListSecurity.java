package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersClientStatesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 option1;
    public CloudidentityDevicesDeviceUsersClientStatesListSecurity withOption1(CloudidentityDevicesDeviceUsersClientStatesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 option2;
    public CloudidentityDevicesDeviceUsersClientStatesListSecurity withOption2(CloudidentityDevicesDeviceUsersClientStatesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}