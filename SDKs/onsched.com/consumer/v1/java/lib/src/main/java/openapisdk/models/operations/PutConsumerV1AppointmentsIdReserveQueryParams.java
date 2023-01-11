package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdReserveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sendNotifications")
    public Boolean sendNotifications;
    public PutConsumerV1AppointmentsIdReserveQueryParams withSendNotifications(Boolean sendNotifications) {
        this.sendNotifications = sendNotifications;
        return this;
    }
}