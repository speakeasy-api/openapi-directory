package openapisdk.models.operations;



public class PolyUsersLikedassetsListResponse {
    public String contentType;
    public PolyUsersLikedassetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLikedAssetsResponse listLikedAssetsResponse;
    public PolyUsersLikedassetsListResponse withListLikedAssetsResponse(openapisdk.models.shared.ListLikedAssetsResponse listLikedAssetsResponse) {
        this.listLikedAssetsResponse = listLikedAssetsResponse;
        return this;
    }
    public Long statusCode;
    public PolyUsersLikedassetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}