package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdConfirmPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PutConsumerV1AppointmentsIdConfirmPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}