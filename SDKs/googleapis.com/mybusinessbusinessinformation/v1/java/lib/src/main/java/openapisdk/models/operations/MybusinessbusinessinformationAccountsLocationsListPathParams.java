package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationAccountsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessbusinessinformationAccountsLocationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}