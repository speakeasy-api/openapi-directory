package openapisdk.models.operations;



public class FetchTaskReservationResponse {
    public String contentType;
    public FetchTaskReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTaskReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation taskrouterV1WorkspaceTaskTaskReservation;
    public FetchTaskReservationResponse withTaskrouterV1WorkspaceTaskTaskReservation(openapisdk.models.shared.TaskrouterV1WorkspaceTaskTaskReservation taskrouterV1WorkspaceTaskTaskReservation) {
        this.taskrouterV1WorkspaceTaskTaskReservation = taskrouterV1WorkspaceTaskTaskReservation;
        return this;
    }
}