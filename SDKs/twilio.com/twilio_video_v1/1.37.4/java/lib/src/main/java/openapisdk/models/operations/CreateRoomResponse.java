package openapisdk.models.operations;



public class CreateRoomResponse {
    public String contentType;
    public CreateRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1Room videoV1Room;
    public CreateRoomResponse withVideoV1Room(openapisdk.models.shared.VideoV1Room videoV1Room) {
        this.videoV1Room = videoV1Room;
        return this;
    }
}