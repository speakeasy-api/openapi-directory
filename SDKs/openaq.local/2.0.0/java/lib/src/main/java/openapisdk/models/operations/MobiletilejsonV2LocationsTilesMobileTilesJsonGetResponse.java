package openapisdk.models.operations;



public class MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse {
    public String contentType;
    public MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TileJson tileJSON;
    public MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse withTileJson(openapisdk.models.shared.TileJson tileJSON) {
        this.tileJSON = tileJSON;
        return this;
    }
}