package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationAccountsLocationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessbusinessinformationAccountsLocationsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}