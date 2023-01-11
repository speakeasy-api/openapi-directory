package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SmartdevicemanagementEnterprisesDevicesExecuteCommandPathParams withName(String name) {
        this.name = name;
        return this;
    }
}