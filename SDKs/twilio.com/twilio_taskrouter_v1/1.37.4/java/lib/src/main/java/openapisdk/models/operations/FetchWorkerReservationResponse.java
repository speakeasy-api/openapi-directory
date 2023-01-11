package openapisdk.models.operations;



public class FetchWorkerReservationResponse {
    public String contentType;
    public FetchWorkerReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchWorkerReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation taskrouterV1WorkspaceWorkerWorkerReservation;
    public FetchWorkerReservationResponse withTaskrouterV1WorkspaceWorkerWorkerReservation(openapisdk.models.shared.TaskrouterV1WorkspaceWorkerWorkerReservation taskrouterV1WorkspaceWorkerWorkerReservation) {
        this.taskrouterV1WorkspaceWorkerWorkerReservation = taskrouterV1WorkspaceWorkerWorkerReservation;
        return this;
    }
}