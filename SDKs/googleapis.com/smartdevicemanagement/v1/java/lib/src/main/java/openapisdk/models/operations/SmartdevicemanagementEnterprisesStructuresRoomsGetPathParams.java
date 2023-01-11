package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SmartdevicemanagementEnterprisesStructuresRoomsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}