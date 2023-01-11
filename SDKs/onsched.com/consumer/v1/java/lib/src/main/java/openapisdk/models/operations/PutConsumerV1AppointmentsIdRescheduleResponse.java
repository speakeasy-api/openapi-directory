package openapisdk.models.operations;



public class PutConsumerV1AppointmentsIdRescheduleResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public PutConsumerV1AppointmentsIdRescheduleResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public PutConsumerV1AppointmentsIdRescheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutConsumerV1AppointmentsIdRescheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}