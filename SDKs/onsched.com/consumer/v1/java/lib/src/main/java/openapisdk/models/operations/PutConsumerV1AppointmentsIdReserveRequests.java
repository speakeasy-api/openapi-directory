package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdReserveRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel;
    public PutConsumerV1AppointmentsIdReserveRequests withAppointmentReserveModel(openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel) {
        this.appointmentReserveModel = appointmentReserveModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel1;
    public PutConsumerV1AppointmentsIdReserveRequests withAppointmentReserveModel1(openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel1) {
        this.appointmentReserveModel1 = appointmentReserveModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel2;
    public PutConsumerV1AppointmentsIdReserveRequests withAppointmentReserveModel2(openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel2) {
        this.appointmentReserveModel2 = appointmentReserveModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel3;
    public PutConsumerV1AppointmentsIdReserveRequests withAppointmentReserveModel3(openapisdk.models.shared.AppointmentReserveModel appointmentReserveModel3) {
        this.appointmentReserveModel3 = appointmentReserveModel3;
        return this;
    }
}