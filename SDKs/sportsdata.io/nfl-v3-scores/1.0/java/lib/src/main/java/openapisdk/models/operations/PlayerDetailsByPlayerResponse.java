package openapisdk.models.operations;



public class PlayerDetailsByPlayerResponse {
    public String contentType;
    public PlayerDetailsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object playerDetail;
    public PlayerDetailsByPlayerResponse withPlayerDetail(Object playerDetail) {
        this.playerDetail = playerDetail;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}