package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesDeviceUsersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesDeviceUsersListSecurityOption1 option1;
    public CloudidentityDevicesDeviceUsersListSecurity withOption1(CloudidentityDevicesDeviceUsersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesDeviceUsersListSecurityOption2 option2;
    public CloudidentityDevicesDeviceUsersListSecurity withOption2(CloudidentityDevicesDeviceUsersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}