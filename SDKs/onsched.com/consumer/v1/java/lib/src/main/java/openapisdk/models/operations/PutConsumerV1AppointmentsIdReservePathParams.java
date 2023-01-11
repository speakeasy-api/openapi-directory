package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdReservePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutConsumerV1AppointmentsIdReservePathParams withId(String id) {
        this.id = id;
        return this;
    }
}