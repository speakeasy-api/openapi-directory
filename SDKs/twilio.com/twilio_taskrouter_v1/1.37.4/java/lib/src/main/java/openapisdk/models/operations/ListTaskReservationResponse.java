package openapisdk.models.operations;



public class ListTaskReservationResponse {
    public String contentType;
    public ListTaskReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTaskReservationListTaskReservationResponse listTaskReservationResponse;
    public ListTaskReservationResponse withListTaskReservationResponse(ListTaskReservationListTaskReservationResponse listTaskReservationResponse) {
        this.listTaskReservationResponse = listTaskReservationResponse;
        return this;
    }
    public Long statusCode;
    public ListTaskReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}