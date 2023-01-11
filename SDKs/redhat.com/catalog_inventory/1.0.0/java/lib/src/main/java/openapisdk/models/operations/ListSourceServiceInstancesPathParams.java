package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceServiceInstancesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListSourceServiceInstancesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}