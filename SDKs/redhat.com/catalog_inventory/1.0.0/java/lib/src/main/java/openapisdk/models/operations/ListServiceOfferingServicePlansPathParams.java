package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceOfferingServicePlansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListServiceOfferingServicePlansPathParams withId(String id) {
        this.id = id;
        return this;
    }
}