package openapisdk.models.operations;



public class ChampionsResponse {
    public Object[] champions;
    public ChampionsResponse withChampions(Object[] champions) {
        this.champions = champions;
        return this;
    }
    public String contentType;
    public ChampionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChampionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}