package openapisdk.models.operations;



public class PutSetupV1AppointmentsIdReassignResourceResourceIdResponse {
    public openapisdk.models.shared.AppointmentViewModel appointmentViewModel;
    public PutSetupV1AppointmentsIdReassignResourceResourceIdResponse withAppointmentViewModel(openapisdk.models.shared.AppointmentViewModel appointmentViewModel) {
        this.appointmentViewModel = appointmentViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1AppointmentsIdReassignResourceResourceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1AppointmentsIdReassignResourceResourceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}