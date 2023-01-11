package openapisdk.models.operations;



public class GetConsumerV1AppointmentsIdResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public GetConsumerV1AppointmentsIdResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AppointmentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AppointmentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}