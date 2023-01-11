package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdNoshowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PutConsumerV1AppointmentsIdNoshowPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}