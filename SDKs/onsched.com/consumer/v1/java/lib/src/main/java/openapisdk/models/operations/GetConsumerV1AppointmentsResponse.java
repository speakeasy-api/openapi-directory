package openapisdk.models.operations;



public class GetConsumerV1AppointmentsResponse {
    public java.util.Map<String, Object> appointmentListViewModel;
    public GetConsumerV1AppointmentsResponse withAppointmentListViewModel(java.util.Map<String, Object> appointmentListViewModel) {
        this.appointmentListViewModel = appointmentListViewModel;
        return this;
    }
    public String contentType;
    public GetConsumerV1AppointmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConsumerV1AppointmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}