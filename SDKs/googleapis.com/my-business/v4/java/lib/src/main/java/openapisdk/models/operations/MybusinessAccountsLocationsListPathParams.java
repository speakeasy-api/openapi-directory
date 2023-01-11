package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}