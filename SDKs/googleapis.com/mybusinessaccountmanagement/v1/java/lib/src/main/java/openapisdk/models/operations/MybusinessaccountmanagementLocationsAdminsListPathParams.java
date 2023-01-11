package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsAdminsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessaccountmanagementLocationsAdminsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}