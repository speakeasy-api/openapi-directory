package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerDirectDealsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AdexchangebuyerDirectDealsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}