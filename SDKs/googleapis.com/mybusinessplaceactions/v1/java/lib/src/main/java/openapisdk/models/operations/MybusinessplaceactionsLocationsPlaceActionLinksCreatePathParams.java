package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}