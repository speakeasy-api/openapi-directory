package openapisdk.models.operations;



public class ListRoomResponse {
    public String contentType;
    public ListRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListRoomListRoomResponse listRoomResponse;
    public ListRoomResponse withListRoomResponse(ListRoomListRoomResponse listRoomResponse) {
        this.listRoomResponse = listRoomResponse;
        return this;
    }
    public Long statusCode;
    public ListRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}