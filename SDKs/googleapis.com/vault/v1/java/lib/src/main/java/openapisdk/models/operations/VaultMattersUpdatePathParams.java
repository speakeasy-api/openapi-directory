package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersUpdatePathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}