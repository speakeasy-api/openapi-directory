package openapisdk.models.operations;



public class TilejsonV2LocationsTilesTilesJsonGetResponse {
    public String contentType;
    public TilejsonV2LocationsTilesTilesJsonGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TilejsonV2LocationsTilesTilesJsonGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TileJson tileJSON;
    public TilejsonV2LocationsTilesTilesJsonGetResponse withTileJson(openapisdk.models.shared.TileJson tileJSON) {
        this.tileJSON = tileJSON;
        return this;
    }
}