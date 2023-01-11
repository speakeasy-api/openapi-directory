package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderServiceOfferingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OrderServiceOfferingPathParams withId(String id) {
        this.id = id;
        return this;
    }
}