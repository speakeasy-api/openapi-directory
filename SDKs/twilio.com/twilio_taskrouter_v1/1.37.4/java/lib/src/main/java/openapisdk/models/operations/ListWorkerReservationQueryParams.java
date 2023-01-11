package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkerReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWorkerReservationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservationStatus")
    public openapisdk.models.shared.WorkerReservationEnumStatusEnum reservationStatus;
    public ListWorkerReservationQueryParams withReservationStatus(openapisdk.models.shared.WorkerReservationEnumStatusEnum reservationStatus) {
        this.reservationStatus = reservationStatus;
        return this;
    }
}