package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowServiceOfferingNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowServiceOfferingNodePathParams withId(String id) {
        this.id = id;
        return this;
    }
}