package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityDevicesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesListSecurityOption1 option1;
    public CloudidentityDevicesListSecurity withOption1(CloudidentityDevicesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public CloudidentityDevicesListSecurityOption2 option2;
    public CloudidentityDevicesListSecurity withOption2(CloudidentityDevicesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}