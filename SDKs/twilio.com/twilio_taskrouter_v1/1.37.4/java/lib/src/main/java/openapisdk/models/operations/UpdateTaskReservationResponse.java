package openapisdk.models.operations;



public class UpdateTaskReservationResponse {
    public String contentType;
    public UpdateTaskReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTaskReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation taskrouterV1WorkspaceTaskTaskReservation;
    public UpdateTaskReservationResponse withTaskrouterV1WorkspaceTaskTaskReservation(openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation taskrouterV1WorkspaceTaskTaskReservation) {
        this.taskrouterV1WorkspaceTaskTaskReservation = taskrouterV1WorkspaceTaskTaskReservation;
        return this;
    }
}