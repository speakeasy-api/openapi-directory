package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessplaceactionsLocationsPlaceActionLinksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessplaceactionsLocationsPlaceActionLinksDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}