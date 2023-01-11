package openapisdk.models.operations;



public class PolyUsersAssetsListResponse {
    public String contentType;
    public PolyUsersAssetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUserAssetsResponse listUserAssetsResponse;
    public PolyUsersAssetsListResponse withListUserAssetsResponse(openapisdk.models.shared.ListUserAssetsResponse listUserAssetsResponse) {
        this.listUserAssetsResponse = listUserAssetsResponse;
        return this;
    }
    public Long statusCode;
    public PolyUsersAssetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}