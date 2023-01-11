package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersUndeletePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}