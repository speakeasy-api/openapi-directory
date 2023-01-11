package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTaskReservationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservationStatus")
    public openapisdk.models.shared.TaskReservationEnumStatusEnum reservationStatus;
    public ListTaskReservationQueryParams withReservationStatus(openapisdk.models.shared.TaskReservationEnumStatusEnum reservationStatus) {
        this.reservationStatus = reservationStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WorkerSid")
    public String workerSid;
    public ListTaskReservationQueryParams withWorkerSid(String workerSid) {
        this.workerSid = workerSid;
        return this;
    }
}