package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsMediaCustomersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsMediaCustomersListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}