package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConsumerV1AppointmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completeBooking")
    public String completeBooking;
    public PostConsumerV1AppointmentsQueryParams withCompleteBooking(String completeBooking) {
        this.completeBooking = completeBooking;
        return this;
    }
}