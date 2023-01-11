package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdBookRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.AppointmentBookModel appointmentBookModel;
    public PutConsumerV1AppointmentsIdBookRequests withAppointmentBookModel(openapisdk.models.shared.AppointmentBookModel appointmentBookModel) {
        this.appointmentBookModel = appointmentBookModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppointmentBookModel appointmentBookModel1;
    public PutConsumerV1AppointmentsIdBookRequests withAppointmentBookModel1(openapisdk.models.shared.AppointmentBookModel appointmentBookModel1) {
        this.appointmentBookModel1 = appointmentBookModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.AppointmentBookModel appointmentBookModel2;
    public PutConsumerV1AppointmentsIdBookRequests withAppointmentBookModel2(openapisdk.models.shared.AppointmentBookModel appointmentBookModel2) {
        this.appointmentBookModel2 = appointmentBookModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.AppointmentBookModel appointmentBookModel3;
    public PutConsumerV1AppointmentsIdBookRequests withAppointmentBookModel3(openapisdk.models.shared.AppointmentBookModel appointmentBookModel3) {
        this.appointmentBookModel3 = appointmentBookModel3;
        return this;
    }
}