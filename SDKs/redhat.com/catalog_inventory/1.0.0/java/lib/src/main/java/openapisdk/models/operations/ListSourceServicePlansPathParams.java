package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceServicePlansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListSourceServicePlansPathParams withId(String id) {
        this.id = id;
        return this;
    }
}