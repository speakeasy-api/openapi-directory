package openapisdk.models.operations;



public class VectortileTerraintilesGetResponse {
    public String contentType;
    public VectortileTerraintilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VectortileTerraintilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TerrainTile terrainTile;
    public VectortileTerraintilesGetResponse withTerrainTile(openapisdk.models.shared.TerrainTile terrainTile) {
        this.terrainTile = terrainTile;
        return this;
    }
}