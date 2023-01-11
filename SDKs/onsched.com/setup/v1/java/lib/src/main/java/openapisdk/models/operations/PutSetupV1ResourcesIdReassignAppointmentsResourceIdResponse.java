package openapisdk.models.operations;



public class PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse {
    public openapisdk.models.shared.AppointmentViewModel[] appointmentViewModels;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse withAppointmentViewModels(openapisdk.models.shared.AppointmentViewModel[] appointmentViewModels) {
        this.appointmentViewModels = appointmentViewModels;
        return this;
    }
    public String contentType;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}