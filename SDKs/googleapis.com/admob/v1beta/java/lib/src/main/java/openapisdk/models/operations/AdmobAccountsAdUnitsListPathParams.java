package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsAdUnitsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdmobAccountsAdUnitsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}