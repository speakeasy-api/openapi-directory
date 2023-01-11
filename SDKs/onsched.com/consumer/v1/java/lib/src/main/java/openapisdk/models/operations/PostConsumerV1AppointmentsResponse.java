package openapisdk.models.operations;



public class PostConsumerV1AppointmentsResponse {
    public openapisdk.models.shared.AppointmentInitialViewModel appointmentInitialViewModel;
    public PostConsumerV1AppointmentsResponse withAppointmentInitialViewModel(openapisdk.models.shared.AppointmentInitialViewModel appointmentInitialViewModel) {
        this.appointmentInitialViewModel = appointmentInitialViewModel;
        return this;
    }
    public String contentType;
    public PostConsumerV1AppointmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostConsumerV1AppointmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}