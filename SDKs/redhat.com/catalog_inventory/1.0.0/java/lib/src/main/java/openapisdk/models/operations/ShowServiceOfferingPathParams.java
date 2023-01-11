package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowServiceOfferingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowServiceOfferingPathParams withId(String id) {
        this.id = id;
        return this;
    }
}