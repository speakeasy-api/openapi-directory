package openapisdk.models.operations;



public class UpdateRoomResponse {
    public String contentType;
    public UpdateRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1Room videoV1Room;
    public UpdateRoomResponse withVideoV1Room(openapisdk.models.shared.VideoV1Room videoV1Room) {
        this.videoV1Room = videoV1Room;
        return this;
    }
}