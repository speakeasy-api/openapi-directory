package openapisdk.models.operations;



public class DeleteConsumerV1AppointmentsIdResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public DeleteConsumerV1AppointmentsIdResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public DeleteConsumerV1AppointmentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteConsumerV1AppointmentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}