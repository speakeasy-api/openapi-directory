package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmartdevicemanagementEnterprisesStructuresListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public SmartdevicemanagementEnterprisesStructuresListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}