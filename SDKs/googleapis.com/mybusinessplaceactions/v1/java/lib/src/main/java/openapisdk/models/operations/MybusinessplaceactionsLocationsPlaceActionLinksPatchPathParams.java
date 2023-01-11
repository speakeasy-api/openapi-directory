package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}