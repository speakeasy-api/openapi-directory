package openapisdk.models.operations;



public class FetchRoomResponse {
    public String contentType;
    public FetchRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1Room videoV1Room;
    public FetchRoomResponse withVideoV1Room(openapisdk.models.shared.VideoV1Room videoV1Room) {
        this.videoV1Room = videoV1Room;
        return this;
    }
}