package openapisdk.models.operations;



public class GetSetupV1AppointmentsResponse {
    public java.util.Map<String, Object> appointmentListViewModel;
    public GetSetupV1AppointmentsResponse withAppointmentListViewModel(java.util.Map<String, Object> appointmentListViewModel) {
        this.appointmentListViewModel = appointmentListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1AppointmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1AppointmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}