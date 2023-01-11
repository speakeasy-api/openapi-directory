package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsAppsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdmobAccountsAppsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}