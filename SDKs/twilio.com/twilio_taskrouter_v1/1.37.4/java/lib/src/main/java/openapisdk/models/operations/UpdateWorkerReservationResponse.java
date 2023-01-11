package openapisdk.models.operations;



public class UpdateWorkerReservationResponse {
    public String contentType;
    public UpdateWorkerReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkerReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation taskrouterV1WorkspaceWorkerWorkerReservation;
    public UpdateWorkerReservationResponse withTaskrouterV1WorkspaceWorkerWorkerReservation(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation taskrouterV1WorkspaceWorkerWorkerReservation) {
        this.taskrouterV1WorkspaceWorkerWorkerReservation = taskrouterV1WorkspaceWorkerWorkerReservation;
        return this;
    }
}