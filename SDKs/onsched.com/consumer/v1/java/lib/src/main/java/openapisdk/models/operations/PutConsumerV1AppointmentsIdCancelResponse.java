package openapisdk.models.operations;



public class PutConsumerV1AppointmentsIdCancelResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public PutConsumerV1AppointmentsIdCancelResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public PutConsumerV1AppointmentsIdCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutConsumerV1AppointmentsIdCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}