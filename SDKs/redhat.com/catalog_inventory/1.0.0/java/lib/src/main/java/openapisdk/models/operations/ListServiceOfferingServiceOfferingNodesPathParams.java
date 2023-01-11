package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceOfferingServiceOfferingNodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListServiceOfferingServiceOfferingNodesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}