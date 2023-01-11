package openapisdk.models.operations;



public class ListRoomRequest {
    public String serverURL;
    public ListRoomRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListRoomQueryParams queryParams;
    public ListRoomRequest withQueryParams(ListRoomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoomSecurity security;
    public ListRoomRequest withSecurity(ListRoomSecurity security) {
        this.security = security;
        return this;
    }
}