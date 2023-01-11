package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsAdSourcesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdmobAccountsAdSourcesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}