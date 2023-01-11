package openapisdk.models.operations;



public class ProBowlersResponse {
    public String contentType;
    public ProBowlersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerInfos;
    public ProBowlersResponse withPlayerInfos(Object[] playerInfos) {
        this.playerInfos = playerInfos;
        return this;
    }
    public Long statusCode;
    public ProBowlersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}