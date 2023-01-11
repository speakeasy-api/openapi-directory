package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersAddPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=matterId")
    public String matterId;
    public VaultMattersAddPermissionsPathParams withMatterId(String matterId) {
        this.matterId = matterId;
        return this;
    }
}