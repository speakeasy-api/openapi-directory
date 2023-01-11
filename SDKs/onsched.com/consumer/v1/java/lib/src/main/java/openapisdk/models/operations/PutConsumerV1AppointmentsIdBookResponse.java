package openapisdk.models.operations;



public class PutConsumerV1AppointmentsIdBookResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public PutConsumerV1AppointmentsIdBookResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public PutConsumerV1AppointmentsIdBookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutConsumerV1AppointmentsIdBookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}