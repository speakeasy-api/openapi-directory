package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceServiceOfferingNodesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListSourceServiceOfferingNodesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}