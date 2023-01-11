package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmartdevicemanagementEnterprisesStructuresRoomsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SmartdevicemanagementEnterprisesStructuresRoomsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}