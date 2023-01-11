package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutConsumerV1AppointmentsIdCancelPathParams withId(String id) {
        this.id = id;
        return this;
    }
}