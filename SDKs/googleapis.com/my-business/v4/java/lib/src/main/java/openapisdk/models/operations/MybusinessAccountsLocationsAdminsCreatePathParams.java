package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsAdminsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessAccountsLocationsAdminsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}