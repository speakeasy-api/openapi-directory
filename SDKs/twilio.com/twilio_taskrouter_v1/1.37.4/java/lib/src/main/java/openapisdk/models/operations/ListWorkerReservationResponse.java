package openapisdk.models.operations;



public class ListWorkerReservationResponse {
    public String contentType;
    public ListWorkerReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListWorkerReservationListWorkerReservationResponse listWorkerReservationResponse;
    public ListWorkerReservationResponse withListWorkerReservationResponse(ListWorkerReservationListWorkerReservationResponse listWorkerReservationResponse) {
        this.listWorkerReservationResponse = listWorkerReservationResponse;
        return this;
    }
    public Long statusCode;
    public ListWorkerReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}