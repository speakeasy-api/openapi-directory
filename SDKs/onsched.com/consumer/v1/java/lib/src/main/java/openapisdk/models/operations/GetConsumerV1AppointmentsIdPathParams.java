package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1AppointmentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetConsumerV1AppointmentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}