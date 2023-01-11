package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostConsumerV1AppointmentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel;
    public PostConsumerV1AppointmentsRequests withAppointmentInitialModel(openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel) {
        this.appointmentInitialModel = appointmentInitialModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel1;
    public PostConsumerV1AppointmentsRequests withAppointmentInitialModel1(openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel1) {
        this.appointmentInitialModel1 = appointmentInitialModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel2;
    public PostConsumerV1AppointmentsRequests withAppointmentInitialModel2(openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel2) {
        this.appointmentInitialModel2 = appointmentInitialModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel3;
    public PostConsumerV1AppointmentsRequests withAppointmentInitialModel3(openapisdk.models.shared.AppointmentInitialModel appointmentInitialModel3) {
        this.appointmentInitialModel3 = appointmentInitialModel3;
        return this;
    }
}