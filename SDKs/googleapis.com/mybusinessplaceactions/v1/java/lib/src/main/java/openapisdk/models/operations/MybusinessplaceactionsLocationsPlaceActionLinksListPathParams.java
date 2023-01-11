package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessplaceactionsLocationsPlaceActionLinksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}