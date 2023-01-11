package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConsumerV1AppointmentsIdRescheduleRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel;
    public PutConsumerV1AppointmentsIdRescheduleRequests withAppointmentRescheduleModel(openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel) {
        this.appointmentRescheduleModel = appointmentRescheduleModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel1;
    public PutConsumerV1AppointmentsIdRescheduleRequests withAppointmentRescheduleModel1(openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel1) {
        this.appointmentRescheduleModel1 = appointmentRescheduleModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel2;
    public PutConsumerV1AppointmentsIdRescheduleRequests withAppointmentRescheduleModel2(openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel2) {
        this.appointmentRescheduleModel2 = appointmentRescheduleModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel3;
    public PutConsumerV1AppointmentsIdRescheduleRequests withAppointmentRescheduleModel3(openapisdk.models.shared.AppointmentRescheduleModel appointmentRescheduleModel3) {
        this.appointmentRescheduleModel3 = appointmentRescheduleModel3;
        return this;
    }
}