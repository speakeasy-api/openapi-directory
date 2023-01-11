package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdConfirmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=undo")
    public Boolean undo;
    public PutConsumerV1AppointmentsIdConfirmQueryParams withUndo(Boolean undo) {
        this.undo = undo;
        return this;
    }
}