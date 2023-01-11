package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolyUsersAssetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PolyUsersAssetsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}